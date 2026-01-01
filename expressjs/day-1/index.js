import express from "express";
import { data } from "./data/data.js"

const app = express()
app.use(express.json())

const PORT = 3000

// 1. GET Request ( it is for fetching data from server )

app.get("/", (req, res) => {
  res.status(200).send("Hello! World")
})

// Industry Standards
app.get("/api/v1/users", (req, res) => {
  // console.log(req.query)
  // query params
  const { name } = req.query

  if (name) {
    const user = data.filter((user) => {
      return user.name === name
    })
    res.status(200).send(user)
  }
  res.status(200).send(data)
})

// router params
app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params
  const parsedId = parseInt(id)

  const user = data.find((user) => {
    return user.id === parsedId
  })

  // console.log(req.params)
  res.status(200).send(user)
})

// 2. POST Request ( it is for sending data to server )
app.post("/api/v1/users", (req, res) => {
  const { name, displayname } = req.body

  const newUser = {
    id: data.length + 1,
    name,
    displayname
  }

  data.push(newUser)

  res.status(201).send({
    message: "User Created",
    data: newUser
  })
})

// 3. PUT Request ( it is for updating data on server ) UPDATE ALL FIELDS
app.put("/api/v1/users/:id", (req, res) => {
  const { body, params: { id } } = req

  const parsedId = parseInt(id)

  const userIndex = data.findIndex((user) => {
    return user.id === parsedId
  })

  if (userIndex === -1) {
    res.status(404).send("User Not Found")
  }

  data[userIndex] = {
    id: parsedId,
    ...body
  }

  res.status(200).send({
    message: "User Updated",
    data: data[userIndex]
  })
})

// 4. PATCH Request ( it is for updating data on server ) UPDATE SPECIFIC FIELDS
app.patch("/api/v1/users/:id", (req, res) => {
  const { body, params: { id } } = req

  const parsedId = parseInt(id)

  const userIndex = data.findIndex((user) => {
    return user.id === parsedId
  })

  if (userIndex === -1) {
    res.status(404).send("User Not Found")
  }

  data[userIndex] = {
    ...data[userIndex], ...body
  }

  res.status(200).send({
    message: "User Updated",
    data: data[userIndex]
  })
})

// 5. DELETE Request ( it is for deleteing data on server )


app.listen(PORT, () => {
  console.log(`Server is running at http:localhost:${PORT}`)
})

// Assignment : Implement DELETE Request
// filter, find and spread operator, middleware
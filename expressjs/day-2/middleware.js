import express from "express"

const app = express()

// global middleware

function sayHiMiddleware(req, res, next) {
  console.log("Hi I am Global Middleware😊")
  next()
}

// app.use(sayHiMiddleware)



const PORT = 3000

// 1. global middleware
// 2. specific routes mmiddleware
// 3. inbuilt middleware

app.get("/", sayHiMiddleware, (req, res) => {
  res.send("Hello World")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
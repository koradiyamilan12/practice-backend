import express from "express"

import userRouter from "./routes/user.routes.js"

const app = express()

const PORT = 3000

app.use("/api/v1/users", userRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
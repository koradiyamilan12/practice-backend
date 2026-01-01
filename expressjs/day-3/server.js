import express from "express"
import cookieParser from "cookie-parser"

const app = express()

const PORT = 3000

app.use(cookieParser("secret"))

app.get("/", (req, res) => {
  res.cookie("userId", "99", {
    maxAge: 1000 * 60 * 60 * 24,
    signed: true
  })
  res.send("Hello")
})

app.get("/product", (req, res) => {

  console.log("Cookies", req.cookies)
  console.log("Signed Cookies", req.signedCookies)
  // console.log(req.headers.cookie)

  if (req.cookies.name && req.cookies.name === "express") {
    res.status(200).send({
      id: 1,
      name: "item",
      price: "$100"
    })
  }

  res.status(403).send("you are not authorized to view this page")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

// && and ??
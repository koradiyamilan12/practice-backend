const http = require("http")
const fs = require("fs")

const PORT = 8080

const myServer = http.createServer((request, response) => {

  // console.log(request)

  const log = `${Date.now()}: & From ${request.url} New Request Received\n`

  fs.appendFile("./log.txt", log, (err) => {
    if (err) {
      console.log("Error writing to the log file: ", err)
      response.statusCode = 500
      response.end("Internal Server Error")
      return;
    }
    
    response.end("Hello World From Server")
  })

  response.end("Hello From Server")
})

myServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost${PORT}`)
})

// fs module use karke 1 log file create karna kab user ne req kara and kon se route pe req kara
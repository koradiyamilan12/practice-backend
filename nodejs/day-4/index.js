const http = require("http")
const fs = require("fs")
const { Transform, pipeline } = require("stream")

const server = http.createServer((req, res) => {

  // 1

  // Downloading file in a bad way

  // const file = fs.readFileSync("sample.txt")

  // res.end(file)

  // 2

  // Downloading file in a good way (stream)

  // const readableStream = fs.createReadStream("sample.txt")
  // readableStream.pipe(res)

  // 2
  // copy file in a bad way

  // const file = fs.readFileSync("sample.txt")
  // fs.writeFileSync("output.txt", file)
  // res.end()

  // copy file good way (stream)

  // const readStream = fs.createReadStream("sample.txt")
  // const writeStream = fs.createWriteStream("output.txt")
  // readStream.on("data", (chunk) => {
  //   console.log("CHUNK: ", chunk)
  //   writeStream.write(chunk)
  // })

  // 3 String processing
  // Bad approach
  // uppercase()
  // ipsum -> Milan
  const readStream = fs.createReadStream("sample.txt")
  const writeStream = fs.createWriteStream("output.txt")

  // readStream.on("data", (chunk) => {
  //   const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Milan")
  //   writeStream.write(modifiedWord)
  // })

  // goog way

  const tranformStream = new Transform({
    transform(chunk, encoding, callback) {
      const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Milan")
      callback(null, modifiedWord)
    }
  })

  // readStream.pipe(tranformStream).pipe(writeStream)

  // pipeline(readStream, tranformStream, pipeline, (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // })

  res.end()
})

server.listen(3000, () => {
  console.log(`Server is running at http://localhost${3000}`)
})

// stream -> writeable and readable

// pipe method left hand side readable and right hand side me writeable

// req readable stream hota hai
// res writeable stream hota hai

// tranformStraem -> readable and writeable dono hota hai
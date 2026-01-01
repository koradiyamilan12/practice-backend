const { Readable, Writable } = require("stream")

const readableStream = new Readable(
  {
    highWaterMark: 6,
    read() { }
  }
)

const writeableStream = new Writable({
  write(streamData) {
    console.log("Writing...", streamData.toString())
  }
})

readableStream.on("data", (chunk) => {
  console.log("CHUNK ", chunk.toString())
  writeableStream.write(chunk)
})

console.log(readableStream.push("Hello"))

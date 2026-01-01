const fs = require("fs")
const os = require("os")

console.log(os.cpus().length)

// sync, async

// sync Blocking code, async non Blocking code

// write
// read
// update
// delete

// write

// sync write

// fs.writeFileSync("./text.txt", "Hey World this is sync writing")

// async write

// fs.writeFile("./test.txt", "hello world i am async code", (err) => {
//   console.log(err)
// })


// read

// sync read

// const res = fs.readFileSync("./text.txt", "utf-8")

// console.log(res)

// async read

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// update / append

// sync

// fs.appendFileSync("./text.txt", new Date().toDateString())

// async

// fs.appendFile("./log.txt", `Hello world this is milan and logged in at ${new Date().toDateString()}\n`, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// cpSync
// unlinkSync
// mkdirSync
// statSync
const path = require("path")

// only available in commonjs

// console.log("FILENAME", __filename)
// console.log("DIRNAME", __dirname)

// School Management system

// folders/students/DataTransfer.txt

// 1. join()
const filepath = path.join("folder", "students", "data.txt")

console.log(filepath)

const parsedDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({
  parsedDataPath,
  resolvedPath,
  extname,
  basename,
  dirname
})
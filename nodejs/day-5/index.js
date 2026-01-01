const crypto = require("crypto")

// 1. randomBytes
const randomvalues = crypto.randomBytes(100)
console.log(randomvalues.toString("hex"))

// 2. createHash

const hashValue = crypto.createHash("sha256").update("Milan").digest("hex")

const inputValue = "Milan"

const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

console.log(hashValue)

if (hashValue === matchValue) {
  console.log("you can login")
} else {
  console.log("Something went wrong")
}

// encryption and decryption

const data = {
  name: "Milan",
  age: 20,
  password: 124353247895
}

data = "iuenvy7n4c3n4wioueq84nt8cy8yetcwe8yoyt"

const realValue = 124353247895
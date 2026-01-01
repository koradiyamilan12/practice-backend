console.log("Hello world i am node-js")

// console.log(window) // works in browsers only
// console.log(alert) // works in browsers only

const { AddFunc, SubFunc } = require("./math")

console.log("The value of my module is", AddFunc(1, 2) + " and " + SubFunc(3, 2))
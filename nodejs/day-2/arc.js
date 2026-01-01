// process.env.UV_THREADPOOL_SIZE = require("os").cpus().length
// const fs = require("fs")

// setImmediate(() => {
//   console.log("Hello from immediate -1")
// }, 0)

// setTimeout(()=>{
//   console.log("Hello from timeout -1")
// }, 0)

// console.log("Hello world -1")

// 1. console
// 2. setTimeout
// 3. setImmediate

// process.env.UV_THREADPOOL_SIZE = 5
// const crypto = require("crypto")

// // SET UV_THREADPOOL_SIZE=1 && node arc.js

// const os = require("os")


// let start = Date.now()

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`)
// })

console.log("UV_THREADPOOL_SIZE: ", process.env.UV_THREADPOOL_SIZE)
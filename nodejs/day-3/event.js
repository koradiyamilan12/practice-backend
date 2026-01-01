const EventEmitter = require("events")

const emitter = new EventEmitter()

// keymethods
// on(eventName, Listener) --- create

// emit(eventName, [args]) --- execute

emitter.on("GREET", (username,id) => {
  console.log(`Hello world ${username} and the id is ${id}`)
})

emitter.emit("GREET", "Milan", "123124")


// const EventEmitter = require("events")

// const emitter = new EventEmitter()

emitter.on("room1", (args)=>{
  console.log("this is room 1",args.usename, args.id)
})

emitter.emit("room1",{
  usename: "Milan",
  id: "7326581"
})

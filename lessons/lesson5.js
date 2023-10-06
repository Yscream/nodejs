const Emitter = require("events");
const dotenv = require("dotenv");
dotenv.config();

const emitter = new Emitter();

const callback = (data, second) => {
  console.log("you send the message " + data);
  console.log("second argument " + second);
};

emitter.on("message", callback);

const MESSAGE = process.env.MESSAGE || "";
const MESSAGE2 = process.env.MESSAGE2 || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "you didnt specify message");
}

//if we want to generate event once
emitter.once("message2", (data, second) => {
  console.log("you send the message " + data);
  console.log("second argument " + second);
});

emitter.emit("message2", MESSAGE2, 321); //it will stop after this event
emitter.emit("message2", MESSAGE2, 321);
emitter.emit("message2", MESSAGE2, 321);
emitter.emit("message2", MESSAGE2, 321);

emitter.removeAllListeners();
emitter.removeListener("message", callback);

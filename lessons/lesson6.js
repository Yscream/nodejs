// stream !== thread

// 4 types of streams:
// readable
// writable
// duplex - for read and write (readable + writable)
// transform - the same as duplex, but can change data as read it

const fs = require("fs");
const path = require("path");

const pathToFile = path.resolve(__dirname, "textLesson6.txt");
const pathToFileToWrite = path.resolve(__dirname, "test6.txt")
// fs.readFile(pathToFile, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//do the same via streams

const readableStream = fs.createReadStream(pathToFile, {
  encoding: "utf-8",
});

//one chunk equals 64Kb

readableStream.on("data", (chunk) => {
  console.log(chunk);
});

readableStream.on("end", () => console.log("stop reading"));
readableStream.on("open", () => console.log("start reading"));
readableStream.on("error", (err) => console.log(err));

const writableStream = fs.createWriteStream(pathToFileToWrite);
for (let i = 0; i < 20; i++) {
  writableStream.write(i + "\n");
}
writableStream.end();

const http = require('http')

http.createServer((req, res) => {
  const stream = fs.createReadStream(pathToFile)

  stream.pipe(res)
})

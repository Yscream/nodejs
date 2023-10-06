const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("folder was created");
// });

// console.log("END");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "111111ssad211x sdiudyu",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// fs.appendFile(
//   path.resolve(__dirname, "test.txt"),
//   "ssad211x sdiudyu",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//   }
// );

const writeFileAsync = async (pathToFile, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path.resolve(pathToFile), data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (pathToFile, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path.resolve(pathToFile), data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, { encoding: "utf-8" }, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const textFile = path.resolve(__dirname, "text.txt");
const countFile = path.resolve(__dirname, "count.txt");

// writeFileAsync(p, "data\n")
//   .then(() => appendFileAsync(p, "add new data1\n"))
//   .then(() => appendFileAsync(p, "add new data2\n"))
//   .then(() => appendFileAsync(p, "add new data3\n"))
//   .then(() => readFileAsync(p))
//   .then(data => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(p).then(() => console.log("file was removed"))

const text = process.env.TEXT || "";

writeFileAsync(textFile, text)
  .then(() => readFileAsync(textFile))
  .then((data) => data.split(" ").length)
  .then((count) => writeFileAsync(countFile, `Words quantity ${count}`))
  .then(() => removeFileAsync(((textFile))))
  .catch((err) => console.log(err));

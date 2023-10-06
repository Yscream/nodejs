const path = require("path");

console.log(path.join("first", "second", "third"));
console.log(__dirname);
console.log(__filename);
const fullpath = path.resolve(__dirname, "first", "second", "third.js");
console.log(path.parse(fullpath));
console.log(path.sep);
console.log(path.isAbsolute("first/second"));
console.log(path.basename(fullpath));
console.log(path.extname(fullpath));

//url

const siteURL = "http://localhost:8080/users?id=1"

const url = new URL(siteURL)

console.log(url)

const fs = require("fs")
// gives networking capability to create an http service
const http = require("http")
const url = require("url")

// ----------------Blocking Synchronous
// Read files in node js
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8")

// console.log(textIn)

// // write files (create new file) in node js
// const textOut = `This is what we know about the avocado: ${textIn}. \n ${Date.now()}`

// fs.writeFileSync("./txt/output.txt", textOut)
// console.log("File Written!")

// // ----------------Non Blocking asynchronous
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2)
//   })
// })
// console.log("will read file")

// Server -------------------------------------------------
const data = fs.readyFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const dataObj = JSON.parse(data)

const server = http.createServer((request, response) => {
  const pathName = request.url
  if (pathName === "/" || pathName === "/overview") {
    response.end("this is the OVERVIEW")
  } else if (pathName === "/product") {
    response.end("this is the PRODUCT")
  } else if (pathName === "/api") {
    response.writeHead(200, { "Content-type": "application/json" })
    response.end(data)
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    })
    response.end("<h1>Page not found!</h1>")
  }
})
// params: port, (local host, don't technically need to specify), third argument is optional callback to confirm server is working
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000")
})

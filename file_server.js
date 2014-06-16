var http = require('http')
var fs = require('fs')

function handleRequest(port, file) {
  http.createServer(function (req, res) {
    fs.createReadStream(file).pipe(res)
  }).listen(port)
}

handleRequest(process.argv[2], process.argv[3])

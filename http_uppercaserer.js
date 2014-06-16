var http = require('http')
var map = require('through2-map')

function handleRequest(port) {
  http.createServer(function (request, response) {
    if (request.method != 'POST') {
      return response.end('send me a POST\n')
    }
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
  }).listen(port)
}

handleRequest(Number(process.argv[2]))

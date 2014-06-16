var http = require('http')
var url = require('url')

function parseTime(isoDate) {
    var date = new Date(isoDate)
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var json = {"hour": hours, "minute": minutes, "second": seconds}
    return JSON.stringify(json)
}

function parseUnixTime(isoDate) {
    var date = new Date(isoDate)
    var unixTime = date.getTime()
    var json = {"unixtime": unixTime}
    return JSON.stringify(json)
}

function parseUrl(request) {
  urlObj = url.parse(request.url, true)
  pathname = urlObj.pathname
  isoDate = urlObj.query.iso
  if (pathname == '/api/parsetime') {
    return parseTime(isoDate)
  } else if (pathname == '/api/unixtime') {
    return parseUnixTime(isoDate)
  }
}

function handleRequest(port) {
  http.createServer(function (request, response) {
    if (request.method != 'GET') {
      return response.end('Please send a GET\n')
    }
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(parseUrl(request))
  }).listen(port)
}

handleRequest(Number(process.argv[2]))

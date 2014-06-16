var net = require('net')

function fillZero(time) {
  return (time.toString().length < 2 ? '0' : '') + time
}

function getTime() {
    var date = new Date()
    var year =  date.getFullYear()
    var month = fillZero(date.getMonth() + 1)     // starts at 0
    var day = fillZero(date.getDate())      // returns the day of month
    var hour = fillZero(date.getHours())
    var minute = fillZero(date.getMinutes())
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n'
}

var server = net.createServer(function (socket) {
  socket.end(getTime())
})
server.listen(process.argv[2])

var http = require('http')
var bl = require('bl')

var results = []
var count = 0

function get_content(content, index) {
    count += 1
    http.get(content, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            results[index] = data.toString()
            count -= 1
            if (count == 0) {
                print_content()
            }
        }))
    })
}

function print_content() {
    results.forEach(function (string) {
        console.log(string)
    })
}


get_content(process.argv[2], 0)
get_content(process.argv[3], 1)
get_content(process.argv[4], 2)

var print_files = require('./file_filter.js')

var directory = process.argv[2]
var extension = process.argv[3]

print_files(directory, extension, function (err, list) {
    if (err) {
        throw err
    }
    for (var i in list) {
        console.log(list[i])
    }
})

var fs = require('fs')

var file = process.argv[2]
var extension = process.argv[3]

fs.readdir(file, function (err, list) {
    if (err) {
        throw err
    }
    print_list(list)
})

function print_list(list) {
    for (var i in list) {
        entry_array = list[i].split('.')
        if (entry_array[1] == extension) {
            console.log(list[i])
        }
    }
}

var fs = require('fs')

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err)
        }
        var out_list = []
        for (var i in list) {
            entry_array = list[i].split('.')
            if (entry_array[1] == extension) {
                out_list.push(list[i])
            }
        }
        callback(null, out_list)
    })
}

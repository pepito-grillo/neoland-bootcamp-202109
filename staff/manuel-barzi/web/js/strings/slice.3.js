// TODO implement the standalone version of String.prototype.slice()

function slice(string, init, end) {
    // for loop
    // var aux (new string)
    // return aux
    var slice = ''

    for (var i = init < 0? string.length + init : init; i < (end? (end < 0? string.length + end : end) : string.length); i++) {
        var char = string[i]

        slice += char // slice = slice + char
    }

    return slice
}
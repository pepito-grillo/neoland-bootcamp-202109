// TODO implement the standalone version of String.prototype.slice()

function slice(string, init, end) {
    // for loop
    // var aux (new string)
    // return aux
    var slice = ''

    for (var i = init; i < (end? end : string.length); i++) {
        var char = string[i]

        slice += char // slice = slice + char
    }

    return slice
}
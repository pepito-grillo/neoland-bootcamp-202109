// TODO implement the standalone version of String.prototype.slice()

function slice(string, init) {
    // for loop
    // var aux (new string)
    // return aux
    var slice = ''

    for (var i = init; i < string.length; i++) {
        var char = string[i]

        slice += char // slice = slice + char
    }

    return slice
}
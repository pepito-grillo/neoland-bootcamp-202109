// TODO implement the standalone version of String.prototype.indexOf()

function indexOf(string, value) {
    // for to iterate string
    // when character === value => return index

    var index = -1

    for (var i = 0; i < string.length && index === -1; i++) {
        var character = string[i]

        if (character === value)
            index = i
    }

    return index
}
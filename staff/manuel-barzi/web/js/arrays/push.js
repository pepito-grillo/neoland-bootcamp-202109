// TODO implement the standalone version of Array.prototype.push()

function push(array) {
    for (var i = 1; i < arguments.length; i++)
        array[array.length] = arguments[i]

    return array.length
}
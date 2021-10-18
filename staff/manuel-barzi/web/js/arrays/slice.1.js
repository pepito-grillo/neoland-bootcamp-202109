function slice(array, start) {
    var sliced = []

    for (var i = start; i < array.length; i++) {
        sliced[sliced.length] = array[i]
    }

    return sliced
}
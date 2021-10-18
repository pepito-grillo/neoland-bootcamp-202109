function slice(array, start, end) {
    var sliced = []

    end = end? end : array.length

    for (var i = start; i < end; i++) {
        sliced[sliced.length] = array[i]
    }

    return sliced
}
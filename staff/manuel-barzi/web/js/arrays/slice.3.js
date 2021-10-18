function slice(array, start, end) {
    var sliced = []

    start = start < 0? array.length + start : start

    end = end? end : array.length

    for (var i = start; i < end; i++) {
        sliced[sliced.length] = array[i]
    }

    return sliced
}
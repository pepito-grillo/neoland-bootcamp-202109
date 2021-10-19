function concat(array1, array2) {
    var array3 = []

    for (var i = 0; i < array1.length; i++) {
        var element = array1[i]

        array3.push(element)
    }

    for (var i = 0; i < array2.length; i++) {
        var element = array2[i]

        array3.push(element)
    }

    return array3
}
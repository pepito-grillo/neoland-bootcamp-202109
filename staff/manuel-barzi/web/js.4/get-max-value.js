function getMaxValue(numbers) {
    var max = 0

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i]

        if (number > max) {
            max = number
        }
    }

    return max
}
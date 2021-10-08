function countLetters(text) {
    var spacesCount = 0
    var totalCharsCount = 0

    for (var i = 0; i < text.length; i++) {
        var character = text[i]

        if (character === ' ') {
            spacesCount++
        }

        totalCharsCount++
    }

    var lettersCount = totalCharsCount - spacesCount

    return lettersCount
}
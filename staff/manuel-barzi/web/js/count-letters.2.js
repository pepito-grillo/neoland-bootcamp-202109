function countLetters(text) {
    var spacesCount = 0

    for (var i = 0; i < text.length; i++) {
        var character = text[i]

        if (character === ' ') {
            spacesCount++
        }
    }

    var lettersCount = text.length - spacesCount

    return lettersCount
}
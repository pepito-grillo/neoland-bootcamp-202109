function countLetters(text) {
    var lettersCount = 0

    for (var i = 0; i < text.length; i++) {
        var character = text[i]

        if (character !== ' ') {
            lettersCount++
        }
    }

    return lettersCount
}
function split(text, separator) {
    var parts = []

    if (separator === '') {
        for (var i = 0; i < text.length; i++) {
            var character = text[i]

            parts[i] = character
        }
    } else {
        var part = ''

        for (var i = 0; i < text.length; i++) {
            var character = text[i]

            if (character === separator) {
                parts[parts.length] = part

                part = ''
            } else {
                part += character // part = part + character
            }
        }

        parts[parts.length] = part
    }

    return parts
}
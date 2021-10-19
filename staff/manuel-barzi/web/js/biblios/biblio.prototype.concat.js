Biblio.prototype.concat = function () {
    var result = new Biblio

    for (var i = 0; i < this.length; i++) {
        result[result.length] = this[i]
        result.length++
    }

    for (var i = 0; i < arguments.length; i++) {
        var biblio = arguments[i]

        for (var j = 0; j < biblio.length; j++) {
            var element = biblio[j]

            result[result.length] = element
            result.length++
        }
    }

    return result
}
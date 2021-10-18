Biblio.prototype.map = function(callback) {
    var result = new Biblio

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        result[i] = callback(element, i)     
        result.length++   
    }

    return result
}
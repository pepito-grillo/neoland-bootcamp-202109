Biblio.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element, i)        
    }
}
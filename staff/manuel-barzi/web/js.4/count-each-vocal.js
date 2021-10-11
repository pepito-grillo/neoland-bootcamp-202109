function countEachVocal(text) {
    // TODO implement me

    // devuelve un objeto
    // ese objeto tiene 5 propiedades (a, e, i, o, u)
    // cada una de ellas tiene el conteo de las correspondientes vocales
    
    // crear objeto con propiedades a, e, i, o, u con valor 0
    // iterar los caracteres en el texto e ir detectando cada vocal
    // cuando detecto vocal incremento su contador correspondiente en el objeto que debe devolver (dentro del for)
    // finalmente, cuando termina el for, retornar ese objeto

    /* var counter = {} // new Object
    counter.a = 0
    counter.e = 0
    counter.i = 0
    counter.o = 0
    counter.u = 0 */
    var counter = { a: 0, e: 0, i: 0, o: 0, u: 0 }

    for (var i = 0; i < text.length; i++) {
        var character = text[i]

        if (character === 'a' || character === 'á' || character === 'à' || character === 'ä') {
            counter.a++ // counter.a = counter.a + 1
        } else if (character === 'e' || character === 'é' || character === 'è' || character === 'ë') {
            counter.e++
        } else if (character === 'i' || character === 'í' || character === 'ì' || character === 'ï') {
            counter.i++
        } else if (character === 'o' || character === 'ó' || character === 'ò' || character === 'ö') {
            counter.o++
        } else if (character === 'u' || character === 'ú' || character === 'ù' || character === 'ü') {
            counter.u++
        }
    }

    return counter
}
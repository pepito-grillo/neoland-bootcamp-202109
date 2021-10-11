// TODO implement the standalone version of Array.prototype.reverse()

function reverse(array) {
    // iterar array hasta la mitad
    // cambiar el valor de la posición de iteracion en el comienzo del array, con el mismo valor correspondiente desde el final de array (ej: cambiar valor posicion 0, por valor posicion longitud array - 1; ej: valor posicion 1 por valor posicion array length - 2; asi sucesivamente)
    // variable temporal para guardar uno de los dos valores en el proceso de swap (intercambio)
    // al terminar el for, retornar el array

    for (var i = 0; i < array.length / 2; i++) {
        var temp = array[i]

        array[i] = array[array.length - 1 - i]

        array[array.length - 1 - i] = temp
    }

    return array
}
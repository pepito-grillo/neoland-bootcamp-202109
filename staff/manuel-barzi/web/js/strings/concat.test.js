describe('TEST concat')

// HINT pay attention to the keyword "arguments" (Seach in Google)

// case 0

var string = 'ho'
var string2 = 'la'

var res = concat(string, string2)

if (typeof res === 'string'
    && res.length === string.length + string2.length
    && res === string + string2) // hola
    success('test ok')
else
    fail('test ko')

// case 1

var string = 'hola'
var string2 = ' '
var string3 = 'mundo'

var res = concat(string, string2, string3)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length
    && res === string + string2 + string3) // hola mundo
    success('test ok')
else
    fail('test ko')


// case 2

var string = 'adios'
var string2 = ' '
var string3 = 'mundo'
var string4 = 'cruel'

var res = concat(string, string2, string3, string2, string4)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length + string2.length + string4.length
    && res === string + string2 + string3 + string2 + string4) // adios mundo cruel
    success('test ok')
else
    fail('test ko')

// case 3

var string = 'banana'
var string2 = ' '
var string3 = 'pera'
var string4 = 'naranja'
var string5 = 'melon'

var res = concat(string, string2, string3, string2, string4, string2, string5)

if (typeof res === 'string'
    && res.length === string.length + string2.length + string3.length + string2.length + string4.length + string2.length + string5.length
    && res === string + string2 + string3 + string2 + string4 + string2 + string5) // banana pera naranja melon
    success('test ok')
else
    fail('test ko')

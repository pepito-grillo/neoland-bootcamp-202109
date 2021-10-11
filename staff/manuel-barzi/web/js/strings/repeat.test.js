describe('TEST repeat')

// CASE 1

var string = 'hola'
var count = 0

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === 0
    && res === '')
    success('test ok')
else
    fail('test failed')

// CASE 2

var string = 'hola'
var count = 1

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === string.length
    && res === string)
    success('test ok')
else
    fail('test failed')

// CASE 3

var string = 'hola'
var count = 10

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === string.length * count
    && res === string.repeat(10))
    success('test ok')
else
    fail('test failed')
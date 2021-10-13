describe('TEST indexOf')

// CASE 1

var res = indexOf('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = indexOf('hola mundo', 'o')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = indexOf('hola mundo', 'i')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test failed')

// CASE 4

var res = indexOf('hola mundo', 'mu')

if (typeof res === 'number'
    && res === 5)
    success('test ok')
else
    fail('test failed')

// CASE 5

var res = indexOf('hola mundo', 'ola')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test failed')

// CASE 6

var res = indexOf('hola mundo', 'olam')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test failed')

// CASE 7

var res = indexOf('hola mundo holamundo', 'olam')

if (typeof res === 'number'
    && res === 12)
    success('test ok')
else
    fail('test failed')

// CASE 8

var res = indexOf('holamundo holamundo', 'olam', 5)

if (typeof res === 'number'
    && res === 11)
    success('test ok')
else
    fail('test failed')
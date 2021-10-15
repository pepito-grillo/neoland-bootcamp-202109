describe('TEST indexOf')

// case 1

var res = indexOf('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    success('test ok')
else
    fail('test ko')

// case 2

var res = indexOf('hola mundo', 'o')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test ko')

// case 3

var res = indexOf('hola mundo', 'i')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test ko')

// case 4

var res = indexOf('hola mundo', 'mu')

if (typeof res === 'number'
    && res === 5)
    success('test ok')
else
    fail('test ko')

// case 5

var res = indexOf('hola mundo', 'ola')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test ko')

// case 6

var res = indexOf('hola mundo', 'olam')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test ko')

// case 7

var res = indexOf('hola mundo holamundo', 'olam')

if (typeof res === 'number'
    && res === 12)
    success('test ok')
else
    fail('test ko')

// case 8

var res = indexOf('holamundo holamundo', 'olam', 5)

if (typeof res === 'number'
    && res === 11)
    success('test ok')
else
    fail('test ko')
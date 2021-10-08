describe('TEST getValue')

// CASE 1

var res = getValue([1, 2, 3, 4], 'max')

if (typeof res === 'number'
    && res === 4)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = getValue([1, 2, 3, 4], 'min')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = getValue([1, 2, 3, 4], 'avg') // promedio

if (typeof res === 'number'
    && res === 2.5)
    success('test ok')
else
    fail('test failed')
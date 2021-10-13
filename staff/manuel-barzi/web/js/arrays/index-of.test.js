describe('TEST indexOf')

// CASE 1

var res = indexOf('hola mundo', 'a')

if (typeof res === 'number'
    && res === 3)
    success('test ok')
else
    fail('test failed')

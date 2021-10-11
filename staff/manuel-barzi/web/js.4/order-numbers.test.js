describe('TEST orderNumbers')

// CASE 1 - order numbers in descendent mode

var res = orderNumbers([1, 2, 3, 4], 'desc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 4
    && res[1] === 3
    && res[2] === 2
    && res[3] === 1)
    success('test ok')
else
    fail('test failed')

// CASE 2 - order numbers in ascendant mode

var res = orderNumbers([4, 3, 2, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    success('test ok')
else
    fail('test failed')

// CASE 3 - order numbers in descendent mode

var res = orderNumbers([56, 22, 23, 14, 102, 75, 1004], 'desc')

if (res instanceof Array
    && res.length === 7
    && res[0] === 1004
    && res[1] === 102
    && res[2] === 75
    && res[3] === 56
    && res[4] === 23
    && res[5] === 22
    && res[6] === 14)
    success('test ok')
else
    fail('test failed')

// CASE 4 - order numbers in ascendant mode

var res = orderNumbers([42, 31.15, 12, 31.01, 11, 33], 'asc')

if (res instanceof Array
    && res.length === 5
    && res[0] === 11
    && res[1] === 12
    && res[2] === 31.01
    && res[3] === 31.15
    && res[4] === 33
    && res[5] === 42)
    success('test ok')
else
    fail('test failed')
console.log('TEST orderNumbers')

// CASE 1

var res = orderNumbers([1, 2, 3, 4], 'desc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 4
    && res[1] === 3
    && res[2] === 2
    && res[3] === 1)
    console.log('test ok')
else
    console.log('test failed')

// CASE 2

var res = orderNumbers([4, 3, 2, 1], 'asc')

if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4)
    console.log('test ok')
else
    console.log('test failed')
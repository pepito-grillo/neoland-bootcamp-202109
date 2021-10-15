console.log('TEST countNumbers')

// case 1

var res = countNumbers([1, 2, 3])

if (res instanceof Array
    && res.length === 3
    && res[0] === 6
    && res[1] === 0
    && res[2] === 6)
    console.log('test ok')
else
    console.error('test ko')

// case 2

var res = countNumbers([1, -2, 3])

if (res instanceof Array
    && res.length === 3
    && res[0] === 4
    && res[1] === -2
    && res[2] === 2)
    console.log('test ok')
else
    console.error('test ko')

// case 3

var res = countNumbers([1, 2, -3])

if (res instanceof Array
    && res.length === 3
    && res[0] === 3
    && res[1] === -3
    && res[2] === 0)
    console.log('test ok')
else
    console.error('test ko')
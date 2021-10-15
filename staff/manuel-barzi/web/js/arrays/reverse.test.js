describe('TEST reverse')

// case 1

var array = [1, 2, 3]
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 3
    && res[1] === 2
    && res[2] === 1)
    success('test ok')
else
    fail('test ko')

// case 2

var array = ['a', 'b', 'c', 'd', 'e']
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 'e'
    && res[1] === 'd'
    && res[2] === 'c'
    && res[3] === 'b'
    && res[4] === 'a')
    success('test ok')
else
    fail('test ko')

// case 3

var array = [true, false]
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === false
    && res[1] === true)
    success('test ok')
else
    fail('test ko')

// TODO add more test cases
describe('TEST forEach')

describe('case 1')

var array = ['a', 'b', 'c']
var res = []

forEach(array, function (element, index) {
    res[index] = element
})

if (res.length === array.length
    && res[0] === array[0]
    && res[1] === array[1]
    && res[2] === array[2])
    success('test ok')
else
    fail('test ko')

describe('case 2')

var array = [1, 2, 3]
var res = []

forEach(array, function (element, index) {
    res[index] = element * 10
})

if (res.length === array.length
    && res[0] === array[0] * 10
    && res[1] === array[1] * 10
    && res[2] === array[2] * 10)
    success('test ok')
else
    fail('test ko')
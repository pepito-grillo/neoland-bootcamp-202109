describe('TEST concat')

describe('case 1')

var array1 = ['a', 'b', 'c']
var array2 = ['d', 'e', 'f']

var res = concat(array1, array2)

if (res instanceof Array
    && res.length === array1.length + array2.length
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && array1.length === 3
    && array1[0] === 'a'
    && array1[1] === 'b'
    && array1[2] === 'c'
    && array2.length === 3
    && array2[0] === 'd'
    && array2[1] === 'e'
    && array2[2] === 'f')
    success('test ok')
else
    fail('test ko')

describe('case 2')

var array1 = ['a', 'b', 'c']
var array2 = ['d', 'e', 'f']
var array3 = ['g', 'h', 'i']

var res = concat(array1, array2, array3)

if (res instanceof Array
    && res.length === array1.length + array2.length + array3.length
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && res[6] === 'g'
    && res[7] === 'h'
    && res[8] === 'i'
    && array1.length === 3
    && array1[0] === 'a'
    && array1[1] === 'b'
    && array1[2] === 'c'
    && array2.length === 3
    && array2[0] === 'd'
    && array2[1] === 'e'
    && array2[2] === 'f'
    && array3.length === 3
    && array3[0] === 'g'
    && array3[1] === 'h'
    && array3[2] === 'i')
    success('test ok')
else
    fail('test ko')


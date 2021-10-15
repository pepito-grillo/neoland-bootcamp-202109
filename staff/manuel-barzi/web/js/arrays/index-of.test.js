describe('TEST indexOf')

// case 1

describe('case 1')

var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var res = indexOf(array, 'bison')

if (typeof res === 'number'
    && res === 1)
    success('test ok')
else
    fail('test ko')

// case 2

describe('case 2')

var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var res = indexOf(array, 'bison', 2)

if (typeof res === 'number'
    && res === 4)
    success('test ok')
else
    fail('test ko')

// case 3

describe('case 3')

var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var res = indexOf(array, 'giraffe')

if (typeof res === 'number'
    && res === -1)
    success('test ok')
else
    fail('test ko')

// case 4

describe('case 4')

var array = [true, 'hola mundo', 10, { name: 'Peter'}, null, undefined, function() {}, [1, 2, 3], NaN, Infinity, Math.PI]
var res = indexOf(array, null)

if (typeof res === 'number'
    && res === 4)
    success('test ok')
else
    fail('test ko')

// case 5

describe('case 5')

var object = { name: 'Peter'}
var array = [true, 'hola mundo', 10, object, null, undefined, function() {}, [1, 2, 3], NaN, Infinity, Math.PI]
var res = indexOf(array, object)

if (typeof res === 'number'
    && res === 3)
    success('test ok')
else
    fail('test ko')

// case 6

describe('case 6')

var object = [1, 2, 3]
var array = [true, 'hola mundo', 10, { name: 'Peter'}, null, undefined, function() {}, object, NaN, Infinity, Math.PI]
var res = indexOf(array, object)

if (typeof res === 'number'
    && res === 7)
    success('test ok')
else
    fail('test ko')
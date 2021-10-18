describe('TEST slice')

describe('case 1')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2)

if (res instanceof Array
    && res.length === 3
    && res[0] === animals[2]
    && res[1] === animals[3]
    && res[2] === animals[4]
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test ok')
else
    fail('test ko')

describe('case 2')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, 4)

if (res instanceof Array
    && res.length === 2
    && res[0] === animals[2]
    && res[1] === animals[3]
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test ok')
else
    fail('test ko')

describe('case 3')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, -2)

if (res instanceof Array
    && res.length === 2
    && res[0] === animals[3]
    && res[1] === animals[4]
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test ok')
else
    fail('test ko')

describe('case 4')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, -1)

if (res instanceof Array
    && res.length === 2
    && res[0] === animals[2]
    && res[1] === animals[3]
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test ok')
else
    fail('test ko')
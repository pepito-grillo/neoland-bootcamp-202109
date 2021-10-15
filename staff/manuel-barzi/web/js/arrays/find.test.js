describe('TEST find')

describe('case 1')

var array = [10, 20, 30, 40, 50]
var items = []
var res = find(array, function (element, index) {
    items[index] = element

    return element > 30
})

if (res === 40
    && items.length === 4
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3])
    sucess('test ok')
else
    fail('test ko')

describe('case 2')

var array = ['one', 'two', 'three', 'four']
var items = []
var res = find(array, function (element, index) {
    items[index] = element

    return element.startsWith('th')
})

if (res === 'three'
    && items.length === 3
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2])
    sucess('test ok')
else
    fail('test ko')
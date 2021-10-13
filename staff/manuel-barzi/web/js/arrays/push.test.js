describe('TEST push')

describe('CASE 1')

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows')

if (typeof res === 'number'
    && res === 4
    && array.length === 4
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows')
    success('test ok')
else
    fail('test fail')

describe('CASE 2')

var array = ['pigs', 'goats', 'sheep']
var res = push(array, 'cows', 'chickens', 'cats', 'dogs', 'mouses')

if (typeof res === 'number'
    && res === 8
    && array.length === 8
    && array[0] === 'pigs'
    && array[1] === 'goats'
    && array[2] === 'sheep'
    && array[3] === 'cows'
    && array[4] === 'chickens'
    && array[5] === 'cats'
    && array[6] === 'dogs'
    && array[7] === 'mouses')
    success('test ok')
else
    fail('test fail')
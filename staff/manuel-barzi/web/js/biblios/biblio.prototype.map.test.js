describe('TEST map')

describe('case 1')

var numbers = new Biblio(1, 2, 3)

var res = numbers.map(function (element, index) {
    return element * 10 + index
})

if (res instanceof Biblio
    && res.length === numbers.length
    && res[0] === numbers[0] * 10 + 0
    && res[1] === numbers[1] * 10 + 1
    && res[2] === numbers[2] * 10 + 2
    && numbers.length === 3
    && numbers[0] === 1
    && numbers[1] === 2
    && numbers[2] === 3)
    success('test ok')
else
    fail('test ko')

describe('case 2')

var chars = new Biblio('a', 'b', 'c')

var res = chars.map(function (element, index) {
    return element + index
})

if (res instanceof Biblio
    && res.length === chars.length
    && res[0] === chars[0] + 0
    && res[1] === chars[1] + 1
    && res[2] === chars[2] + 2
    && chars.length === 3
    && chars[0] === 'a'
    && chars[1] === 'b'
    && chars[2] === 'c')
    success('test ok')
else
    fail('test ko')
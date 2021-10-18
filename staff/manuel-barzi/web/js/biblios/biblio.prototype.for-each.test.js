describe('TEST forEach')

describe('case 1')

var chars = new Biblio('a', 'b', 'c')
var res = []

chars.forEach(function (element, index) {
    res[index] = element
})

if (res.length === chars.length
    && res[0] === chars[0]
    && res[1] === chars[1]
    && res[2] === chars[2])
    success('test ok')
else
    fail('test ko')

describe('case 2')

var chars = new Biblio(1, 2, 3)
var res = []

chars.forEach(function (element, index) {
    res[index] = element * 10
})

if (res.length === chars.length
    && res[0] === chars[0] * 10
    && res[1] === chars[1] * 10
    && res[2] === chars[2] * 10)
    success('test ok')
else
    fail('test ko')
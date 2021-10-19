describe('TEST concat')

describe('case 1')

var b1 = new Biblio('a', 'b', 'c')
var b2 = new Biblio('d', 'e', 'f')

var res = b1.concat(b2)

if (res instanceof Biblio
    && res.length === b1.length + b2.length
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && b1.length === 3
    && b1[0] === 'a'
    && b1[1] === 'b'
    && b1[2] === 'c'
    && b2.length === 3
    && b2[0] === 'd'
    && b2[1] === 'e'
    && b2[2] === 'f')
    success('test ok')
else
    fail('test ko')

describe('case 2')

var b1 = new Biblio('a', 'b', 'c')
var b2 = new Biblio('d', 'e', 'f')
var b3 = new Biblio('g', 'h', 'i')

var res = b1.concat(b2, b3)

if (res instanceof Biblio
    && res.length === b1.length + b2.length + b3.length
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && res[6] === 'g'
    && res[7] === 'h'
    && res[8] === 'i'
    && b1.length === 3
    && b1[0] === 'a'
    && b1[1] === 'b'
    && b1[2] === 'c'
    && b2.length === 3
    && b2[0] === 'd'
    && b2[1] === 'e'
    && b2[2] === 'f'
    && b3.length === 3
    && b3[0] === 'g'
    && b3[1] === 'h'
    && b3[2] === 'i')
    success('test ok')
else
    fail('test ko')
describe('TEST constructor')

describe('case 1')

var b = new Biblio

if (b instanceof Biblio
    && b.length === 0)
    success('test ok')
else
    fail('test ko')

describe('case 2')

var b = new Biblio(1, 2, 3)

if (b instanceof Biblio
    && b.length === 3
    && b[0] === 1
    && b[1] === 2
    && b[2] === 3)
    success('test ok')
else
    fail('test ko')
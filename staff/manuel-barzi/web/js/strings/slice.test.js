describe('TEST slice')

describe('case 1')

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, 31)

if (typeof res === 'string'
    && res === 'the lazy dog.')
    success('test ok')
else
    fail('test ko')

describe('case 2')

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, 4, 19)

if (typeof res === 'string'
    && res === 'quick brown fox')
    success('test ok')
else
    fail('test ko')

describe('case 3')

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -4)

if (typeof res === 'string'
    && res === 'dog.')
    success('test ok')
else
    fail('test ko')

describe('case 4')

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -9, -5)

if (typeof res === 'string'
    && res === 'lazy')
    success('test ok')
else
    fail('test ko')
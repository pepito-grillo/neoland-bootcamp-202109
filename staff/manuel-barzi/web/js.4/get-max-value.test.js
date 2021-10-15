describe('TEST getMaxValue')

// case 1

var res = getMaxValue([1, 2, 3, 4])

if (typeof res === 'number'
    && res === 4)
    success('test ok')
else
    fail('test ko')

// case 2

var res = getMaxValue([56, 22, 23, 1004, 14, 102, 75])

if (typeof res === 'number'
    && res === 1004)
    success('test ok')
else
    fail('test ko')


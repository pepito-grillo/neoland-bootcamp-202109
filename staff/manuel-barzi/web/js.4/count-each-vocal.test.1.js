console.log('TEST countEachVocal')

// CASE 1

var res = countEachVocal('hola mundo')

if (res instanceof Object
    && res.a === 1
    && res.e === 0
    && res.i === 0
    && res.o === 2
    && res.u === 1)
    console.log('test ok')
else
    console.error('test failed')

// CASE 2

var res = countEachVocal('hello world')

if (res instanceof Object
    && res.a === 0
    && res.e === 1
    && res.i === 0
    && res.o === 2
    && res.u === 0)
    console.log('test ok')
else
    console.error('test failed')

// CASE 3

var res = countEachVocal('murciélago cigüeña pingüino')

if (res instanceof Object
    && res.a === 2
    && res.e === 2
    && res.i === 4
    && res.o === 2
    && res.u === 3)
    console.log('test ok')
else
    console.error('test failed')
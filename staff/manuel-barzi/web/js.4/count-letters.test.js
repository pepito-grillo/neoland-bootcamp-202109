console.log('TEST countLetters')

// CASE 1

var res = countLetters('hola mundo')

if (res === 9)
    console.log('test ok')
else
    console.error('test failed')

// CASE 2

var res = countLetters('hola')

if (res === 4)
    console.log('test ok')
else
    console.error('test failed')

// CASE 3

var res = countLetters('mundo')

if (res === 5)
    console.log('test ok')
else
    console.error('test failed')

// CASE 4

var res = countLetters('adios mundo cruel')

if (res === 15)
    console.log('test ok')
else
    console.error('test failed')

// CASE 5

var res = countLetters('lorem ipsum whatever wtf')

if (res === 21)
    console.log('test ok')
else
    console.error('test failed')
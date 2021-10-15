console.log('TEST countWords')

// case 1

var res = countWords('hola mundo')

if (res === 2)
    console.log('test ok')
else
    console.error('test ko')

// case 2

var res = countWords('hello')

if (res === 1)
    console.log('test ok')
else
    console.error('test ko')

// case 3

var res = countWords('noelia dice: abracadabra pata de cabra')

if (res === 6)
    console.log('test ok')
else
    console.error('test ko')

// case 4

var res = countWords('luego de aprender un poco de js, andreu se despide: adiós mundo cruel 😭')

if (res === 14)
    console.log('test ok')
else
    console.error('test ko')

// case 5

var res = countWords('a riccardo le encanta programar js, se lo pasa bomba, bombísima')

if (res === 11)
    console.log('test ok')
else
    console.error('test ko')

// case 6

var res = countWords('dice nico que hoy es su cumpleaños y nos invita a todos a unas cervezas 🍻')

if (res === 16)
    console.log('test ok')
else
    console.error('test ko')
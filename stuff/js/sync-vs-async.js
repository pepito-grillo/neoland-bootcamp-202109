console.log('> sync vs async') // 1

function wait(millis) { // 2
    var before = Date.now() // 2.1

    do {
        var after = Date.now() // 2.2
    } while(after - before < millis) // 2.3
}

console.log('case 1', new Date(), 'start') // 3

wait(3000) // 4

console.log('case 1', new Date(), 'hola mundo') // 5

console.log('case 1', new Date(), 'end') // 6

console.log('case 2', new Date(), 'start') // 7

setTimeout(function() {
    console.log('case 2', new Date(), 'hola mundo') // 8.1
}, 3000) // 8

wait(5000) // 9

console.log('case 2', new Date(), 'end') // 10

console.log('etc') // 11
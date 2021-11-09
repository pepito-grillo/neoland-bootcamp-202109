console.log('> sync vs async')

function wait(millis) {
    var before = Date.now()

    do {
        var after = Date.now()
    } while(after - before < millis)
}

console.log('case 1', new Date(), 'start')

wait(3000)

console.log('case 1', new Date(), 'hola mundo')

console.log('case 1', new Date(), 'end')

console.log('case 2', new Date(), 'start')

setTimeout(function() {
    console.log('case 2', new Date(), 'hola mundo')
}, 3000)

wait(5000)

console.log('case 2', new Date(), 'end')

console.log('etc')
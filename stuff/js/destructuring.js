console.log('> destructuring')

var o = { 
    name: 'Pepito',

    // setName: function(name) {
    setName(name) {
        this.name = name
    }
}

console.log(o.name)

o.setName('Wendy')
console.log(o.name)

var { name, setName } = o

console.log(name)
console.log(setName)

setName('John')
console.log(o.name)
console.log(window.name)

setName = setName.bind(o)
setName('John')
console.log(o.name)

//

var a = [1, 2, 3]

//var x = a[0]
//var y = a[1]
//var z = a[2]
var [x, y, z] = a

console.log(x, y, z)

//

function useState() {
    return [o.name, setName]
}

var [name, setName] = useState()

console.log(name)

setName('William') // throw new render

var [name, setName] = useState()

console.log(name)

setName('Peter') // throw new render

var [name, setName] = useState()

console.log(name)

// ...
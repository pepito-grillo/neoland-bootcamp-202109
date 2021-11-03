console.log('> call, apply & bind')

var a = 1

console.log(a)
console.log(window.a)

window.name = 'Winny'

function hello() {
    return this.name + ': hello'
}

console.log(hello())
console.log(window.hello())
console.log(hello.call())

var peter = { name: 'Peter' }

console.log(hello.call(peter))
console.log(hello.apply(peter))

function salute(name) {
    return this.name + ': hello ' + name
}

console.log(salute.call(peter, 'Wendy'))
console.log(salute.apply(peter, ['Wendy']))

function add() {
    var accum = this.value

    for (var i = 0; i < arguments.length; i++)
        accum += arguments[i]

    return accum
}

var total = { value: 10 }

console.log(add.call(total, 20, 30, 40, 50))
console.log(add.apply(total, [20, 30, 40, 50]))

var values = []

for (var i = 0; i < Math.ceil(Math.random() * 1000); i++)
    values.push(i * 10)

console.log(add.apply(total, values))

//

var wendy = { name: 'Wendy' }

console.log(hello.call(wendy))
console.log(hello.call(peter))

var wendyHello = hello.bind(wendy)
var peterHello = hello.bind(peter)

console.log(wendyHello())
console.log(peterHello())

function bind(func, ctx) { // ctx = context
    return function () {
        return func.call(ctx)
    }
}

var wendyHello = bind(hello, wendy)
var peterHello = bind(hello, peter)

console.log(wendyHello())
console.log(peterHello())

function salute() {
    var people = ''

    for (var i = 0; i < arguments.length; i++) {
        people += arguments[i]

        if (i < arguments.length - 1)
            people += ', '
    }


    return this.name + ': hello ' + people
}

console.log(salute.call(wendy, 'Felipe', 'Jorge', 'Sergio'))

var wendySalute = salute.bind(wendy)
var peterSalute = salute.bind(peter)

console.log(wendySalute('Felipe', 'Jorge', 'Sergio'))
console.log(peterSalute('Felipe', 'Jorge', 'Sergio'))

function bind(func, ctx) { // ctx = context
    return function () {
        return func.apply(ctx, arguments)
    }
}

var wendySalute = bind(salute, wendy)
var peterSalute = bind(salute, peter)

console.log(wendySalute('Felipe', 'Jorge', 'Sergio'))
console.log(peterSalute('Felipe', 'Jorge', 'Sergio'))

//

class Component {
    setState(state) {
        for (var key in state) {
            this.state[key] = state[key]
        }

        console.log(this.render())
    }
}

class App extends Component {
    constructor() {
        super()

        this.state = { name: 'Peter' }

        //this.showMark = this.showMark.bind(this)
    }

    updateName(name) {
        this.setState({ name })
    }

    // showMark() {
    //     this.updateName('Mark')
    // }

    // showMark = function() {
    //     this.updateName('Mark')
    // }.bind(this)

    showMark = () => {
        this.updateName('Mark')
    }

    render() {
        return '<h1>hello ' + this.state.name + '</h1><button onClick={this.showMark}>show Mark</button>'
    }
}

var app = new App

console.log(app.render())

app.updateName('Wendy')
app.updateName('John')

var button = { // dom
    onclick: undefined,
    click() {
        this.onclick.call(undefined)
    }
}

button.onclick = app.showMark
button.click() // with mouse



console.log('> polyfills')

var a = ['nico', 'sergio', 'riccardo', 'adrian', 'gerard', 'ismael', 'ana', 'noelia', 'alvaro']

if (typeof Array.prototype.random === 'undefined')
    Array.prototype.random = function () {
        var index = Math.floor(Math.random() * this.length)

        return this[index]
    }

var winner = a.random()
console.log(winner)


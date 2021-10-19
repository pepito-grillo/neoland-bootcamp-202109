console.log('> closures')

function on(target) {
    return function (value) {
        return target + value
    }
}

var add = on(1)

console.log(add(2))
console.log(add(3))
console.log(add(2))

var add = on(3)

console.log(add(2))
console.log(add(3))
console.log(add(2))

//

function select(name) {
    return { // new Object
        hello: function () {
            return 'Hello, ' + name + '!'
        },

        bye: function () {
            return 'Bye, ' + name + '!'
        }
    }
}

var nico = select('Nico')
var sergio = select('Sergio')

console.log(nico.hello())
console.log(sergio.hello())

console.log(nico.bye())
console.log(sergio.bye())

//

function box(secret, password) {
    var _secret = secret
    var _password = password

    return {
        open: function (password) {
            if (password === _password)
                return _secret
            else
                throw Error('password does not match')
        },

        replace: function (secret, password) {
            if (password === _password)
                _secret = secret
            else
                throw Error('password does not match')
        },

        updatePassword: function(password, newPassword) {
            if (password === _password)
                _password = newPassword
            else
                throw Error('password does not match')
        }
    }
}

var b1 = box('el primer secreto', '123123123')

console.log(b1.open('123123123'))
// console.log(b1.open('123123123_')) // error

b1.replace('el segundo secreto', '123123123')
console.log(b1.open('123123123'))

console.log(b1._password)
console.log(b1._secret)

b1.updatePassword('123123123', '456456456')
// console.log(b1.open('123123123')) // error
console.log(b1.open('456456456'))





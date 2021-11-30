const { model } = require('mongoose')
const { user, creditCard } = require('./schemas')

module.exports = {
    User: model('User', user),
    CreditCard: model('CreditCard', creditCard)
}
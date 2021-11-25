const { expect } = require('chai')
const registerUser = require('./register-user')
const { readFile, writeFile } = require('fs')

describe('registerUser', () => {
    beforeEach(done => {
        writeFile('./users.json', '[]', done)
    })

    it('should succeed with new user', done => {
        const name = 'Wendy Pan'
        const username = 'wendypan'
        const password = '123123123'

        registerUser(name, username, password, error => {
            if (error) return done(error)

            readFile('./users.json', 'utf8', (error, content) => {
                if (error) return done(error)

                const users = JSON.parse(content)

                const user = users.find(user => user.username === username)

                expect(user).to.exist
                expect(user.name).to.equal(name)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)

                done()
            })
        })
    })

    afterEach(done => {
        writeFile('./users.json', '[]', done)
    })
})
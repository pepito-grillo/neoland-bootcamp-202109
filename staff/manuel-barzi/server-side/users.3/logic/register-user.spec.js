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

    describe('when user already exists', () => {
        let user

        beforeEach(done => {
            user = {
                id: '1234',
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            const users = [user]

            // writeFile('./users.json', JSON.stringify(users), error => {
            //     if (error) return done(error)

            //     done()
            // })

            writeFile('./users.json', JSON.stringify(users), done)
        })

        it('should fail when user already exists', done => {
            const { name, username, password } = user
            debugger
            registerUser(name, username, password, error => {
                expect(error).to.exist
                expect(error.message).to.equal(`user with username ${username} already exists`)

                done()
            })
        })
    })

    describe('when parameters are incorrect', () => {
        describe('when name is incorrect', () => {
            it('should fail when name is not a string', () => {
                expect(() => registerUser(true, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(123, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser({}, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(() => {}, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser([], 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')
            })

            it('should fail when name is empty', () => {
                expect(() => registerUser('', 'wendypan', '123123123', () => {})).to.throw(Error, 'name is empty or blank')

                expect(() => registerUser('   ', 'wendypan', '123123123', () => {})).to.throw(Error, 'name is empty or blank')
            })

            it('should fail when name has spaces around', () => {
                expect(() => registerUser(' Wendy Pan ', 'wendypan', '123123123', () => {})).to.throw(Error, 'blank spaces around name')
            })
        })

        describe('when username is incorrect', () => {
            it('should fail when username is not a string', () => {
                expect(() => registerUser('Wendy Pan', true, '123123123', () => {})).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', 123, '123123123', () => {})).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', {}, '123123123', () => {})).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', () => {}, '123123123', () => {})).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', [], '123123123', () => {})).to.throw(TypeError, 'username is not a string')
            })

            it('should fail when username is empty', () => {
                expect(() => registerUser('Wendy Pan', '', '123123123', () => {})).to.throw(Error, 'username is empty or blank')

                expect(() => registerUser('Wendy Pan', '   ', '123123123', () => {})).to.throw(Error, 'username is empty or blank')
            })

            it('should fail when username has spaces', () => {
                expect(() => registerUser('Wendy Pan', ' wendypan ', '123123123', () => {})).to.throw(Error, 'username has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendy pan', '123123123', () => {})).to.throw(Error, 'username has blank spaces')
            })

            it('should fail when username length is less that 4 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wp', '123123123', () => {})).to.throw(Error, 'username has less than 4 characters')
            })
        })

        describe('when password is incorrect', () => {
            it('should fail when password is not a string', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', true, () => {})).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', 123, () => {})).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', {}, () => {})).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', () => {}, () => {})).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', [], () => {})).to.throw(TypeError, 'password is not a string')
            })

            it('should fail when password is empty', () => {
                expect(() => registerUser('Wendy Pan',  'wendypan', '',() => {})).to.throw(Error, 'password is empty or blank')

                expect(() => registerUser('Wendy Pan', 'wendypan', '   ', () => {})).to.throw(Error, 'password is empty or blank')
            })

            it('should fail when password has spaces', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', ' 123123123 ', () => {})).to.throw(Error, 'password has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123 123 123', () => {})).to.throw(Error, 'password has blank spaces')
            })

            it('should fail when password length is less that 8 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123', () => {})).to.throw(Error, 'password has less than 8 characters')
            })
        })

        describe('when callback is incorrect', () => {
            it('should fail when callback is not a string', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', true)).to.throw(TypeError, 'callback is not a function')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', 123)).to.throw(TypeError, 'callback is not a function')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', {})).to.throw(TypeError, 'callback is not a function')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', '...')).to.throw(TypeError, 'callback is not a function')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })
})
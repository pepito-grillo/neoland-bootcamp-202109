const { expect } = require('chai')
const modifyUser = require('./modify-user')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

describe('registerUser', () => {
    let client, db, users

    before(done => {
        client = new MongoClient('mongodb://localhost:27017')

        client.connect(error => {
            if (error) return done(error)

            db = client.db('demo')

            context.db = db

            users = db.collection('users')

            done()
        })
    })

    beforeEach(done => users.deleteMany({}, done))

    describe('when user already exists', () => {
        let user, userId

        beforeEach(done => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()

                done()
            })
        })

        it('should succeed updating name and username on a pre-existing user', done => {
            let { name, username } = user

            name += '-updated'
            username += '-updated'

            const data = { name, username }

            debugger

            modifyUser(userId, data, error => {
                if (error) return done(error)

                users.findOne({ _id: ObjectId(userId) }, (error, user) => {
                    if (error) return done(error)

                    expect(user.name).to.equal(name)
                    expect(user.username).to.equal(username)

                    done()
                })
            })
        })

        it('should succeed updating password on a pre-existing user', done => {
            const { password: oldPassword } = user

            const password = oldPassword + '-updated'

            const data = { oldPassword, password }

            modifyUser(userId, data, error => {
                if (error) return done(error)

                users.findOne({ _id: ObjectId(userId) }, (error, user) => {
                    if (error) return done(error)

                    expect(user.password).to.equal(password)

                    done()
                })
            })
        })

        it('should fail updating password on a pre-existing user when old password is wrong', done => {
            let { password: oldPassword } = user

            const password = oldPassword + '-updated'

            oldPassword += '-wrong'

            const data = { oldPassword, password }

            modifyUser(userId, data, error => {
                expect(error).to.exist
                expect(error.message).to.equal('wrong password')

                done()
            })
        })

        describe('when another user already exists', () => {
            beforeEach(done => {
                const user = {
                    name: 'Peter Pan',
                    username: 'peterpan',
                    password: '123123123'
                }
    
                users.insertOne(user, done)
            })

            it('should fail on updating username to a one that already exists', done => {
                const username = 'peterpan'

                modifyUser(userId, { username }, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal(`user with username ${username} already exists`)

                    done()
                })
            })
        })
    })

    it('should fail when user id does not correspond to any user', done => {
        const userId = ObjectId().toString()

        modifyUser(userId, {}, error => {
            expect(error).to.exist
            expect(error.message).to.equal(`user with id ${userId} not found`)

            done()
        })
    })

    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => modifyUser(true, {}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser(123, {}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser({}, {}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser(() => { }, {}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser([], {}, () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => modifyUser('', {}, () => { })).to.throw(Error, 'id is empty or blank')

                expect(() => modifyUser('   ', {}, () => { })).to.throw(Error, 'id is empty or blank')
            })

            it('should fail when id has spaces', () => {
                expect(() => modifyUser(' abcd1234abcd1234abcd1234 ', {}, () => { })).to.throw(Error, 'id has blank spaces')

                expect(() => modifyUser('abcd 1234abc d1234abc d1234', {}, () => { })).to.throw(Error, 'id has blank spaces')
            })

            it('should fail when id length is different from 24 characters', () => {
                expect(() => modifyUser('abc', {}, () => { })).to.throw(Error, 'id doesn\'t have 24 characters')
            })
        })

        describe('when data is not valid', () => {
            it('should fail when data is not an object', () => {
                expect(() => modifyUser('abcd1234abcd1234abcd1234', true, () => {})).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', 123, () => {})).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', () => {}, () => {})).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', '...', () => {})).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', [], () => {})).to.throw(TypeError, 'data is not an object')
            })
        })

        describe('when callback is not valid', () => {
            it('should fail when callback is not a string', () => {
                expect(() => modifyUser('abcd1234abcd1234abcd1234', {}, true)).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', {}, 123)).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', {}, {})).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', {}, '...')).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', {}, [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })

    after(done => users.deleteMany({}, error => {
        if (error) return done(error)

        client.close(done)
    }))
})
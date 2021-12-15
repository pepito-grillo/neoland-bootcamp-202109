require('dotenv').config()
const { expect } = require('chai')
const { mongoose } = require('demo-data')
const { NotFoundError, FormatError } = require('demo-errors')
const retrieveGame = require('./retrieve-game')

const { env: { MONGO_URL } } = process

describe('retrieveGame', () => {
    before(() => mongoose.connect(MONGO_URL))

    it('should succeed when found correct game', async () => {
        const id = '61b8d030158b2213c7cc367e'

        const game = await retrieveGame(id)
        expect(game).to.be.a('object')
    })

    it(`should fail with doesn't found any game`, async () => {
        const id = '61b8d030168b2213c7cc367e'

        try {
            await retrieveGame(id)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`game with id ${id} not found`)
        }
    })

    it('should fail when id is not valid', () => {
        const wrongMongoId = '61b8d031158b2213c7cc37b'
        expect(() => retrieveGame(wrongMongoId)).to.throw(FormatError, 'id is not valid')
    })

    after(() =>
        mongoose.disconnect()
    )
})
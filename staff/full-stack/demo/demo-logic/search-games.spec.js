require('dotenv').config()
const { expect } = require('chai')
const { mongoose } = require('demo-data')
const { NotFoundError } = require('demo-errors')
const searchGame = require('./search-games')

const { env: { MONGO_URL } } = process

describe.only('searchGame', () => {
    before(() => mongoose.connect(MONGO_URL))

    it('should succeed with found correct games', async () => {
        const query = 'grand'

        const games = await searchGame(query)
        expect(games).to.be.instanceOf(Array)
    })

    it(`should fail with doesn't found any game`, async () => {
        const query = 'grandtheft'

        try {
            const games = await searchGame(query)
            expect(games).to.be.instanceOf(Array)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`game with that ${query} doesn't found`)
        }
    })

    after(() =>
        mongoose.disconnect()
    )
})
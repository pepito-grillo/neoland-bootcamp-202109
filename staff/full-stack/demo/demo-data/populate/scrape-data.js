const axios = require('axios')
const fs = require('fs').promises
const path = require('path')
const mongoose = require('mongoose')
const { models: { Game, Platform } } = require('../index')

const uri = 'mongodb://localhost/demo'

    ; (async function () {
        try {
            await mongoose.connect(uri)

            await Platform.deleteMany()
            await Game.deleteMany()

            const res = await axios.get('https://api.rawg.io/api/platforms?key=8cc91cc3d7094411940ec44617d66d39')

            const { results } = res.data

            const insertions = results.map(async ({ name, games }) => {
                const platform = await Platform.create({ name })

                const insertions = games.map(async ({ id, name }) => {
                    const game = {}

                    game.name = name
                    game.platform = platform._id

                    const { data: { released, background_image, description_raw } } = await axios.get(`https://api.rawg.io/api/games/${id}?key=8cc91cc3d7094411940ec44617d66d39`)

                    game.description = description_raw
                    game.released = released
                    game.backgroundImage = background_image

                    await Game.create(game)
                })

                await Promise.all(insertions)
            })

            await Promise.all(insertions)

            await mongoose.disconnect()
        } catch (error) {
            console.error(error)
        }
    })()
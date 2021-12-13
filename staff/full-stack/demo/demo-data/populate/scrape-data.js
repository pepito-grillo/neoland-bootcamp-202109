//const fetch = require('node-fetch')
//import fetch from 'node-fetch'
const axios = require('axios')
const fs = require('fs').promises
const path = require('path')

    ; (async () => {
        try {
            //const res = await fetch('https://api.rawg.io/api/platforms?key=8cc91cc3d7094411940ec44617d66d39')

            //const data = await res.json()

            const res = await axios.get('https://api.rawg.io/api/platforms?key=8cc91cc3d7094411940ec44617d66d39')

            const { results } = res.data
            const platforms = [], games = []

            results.forEach(({ id, name, games: _games }) => {
                const platform = {}

                platform.id = id
                platform.name = name

                platforms.push(platform)

                _games.forEach(({ id, name }) => {
                    const game = {}

                    game.id = id
                    game.name = name
                    game.platform = platform.id

                    games.push(game)
                })
            })

            await fs.writeFile(path.join(__dirname, 'platforms.json'), JSON.stringify(platforms), 'utf8')

            const detailRequests = games.map(async game => {
                const res = await axios.get(`https://api.rawg.io/api/games/${game.id}?key=8cc91cc3d7094411940ec44617d66d39`)

                const { description } = res.data

                game.description = description
            })

            await Promise.all(detailRequests)

            await fs.writeFile(path.join(__dirname, 'games.json'), JSON.stringify(games), 'utf8')
        } catch (error) {
            console.error(error)
        }
    })()
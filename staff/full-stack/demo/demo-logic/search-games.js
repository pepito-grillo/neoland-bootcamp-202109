const { XMLHttpRequest } = require("xmlhttprequest")

function searchGames(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const games = JSON.parse(responseText)

            callback(null, games)
        } else {
            const res = JSON.parse(responseText)

            callback(new Error(res.error))
        }
    }

    xhr.open('GET', `https://api.rawg.io/api/games?search=${query}&key=8cc91cc3d7094411940ec44617d66d39`)

    xhr.send()
}

module.exports = searchGames
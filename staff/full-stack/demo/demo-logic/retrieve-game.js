const { XMLHttpRequest } = require("xmlhttprequest")

function retrieveGame(id, callback) {
    // Comprobar que el id sea un numero

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const game = JSON.parse(responseText)

            callback(null, game)
        } else {
            const res = JSON.parse(responseText)

            callback(new Error(res.error))
        }
    }

    xhr.open('GET', `https://api.rawg.io/api/games/${id}?key=8cc91cc3d7094411940ec44617d66d39`)

    xhr.send()
}

module.exports = retrieveGame
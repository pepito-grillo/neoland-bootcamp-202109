const { XMLHttpRequest } = require("xmlhttprequest")

function searchItems(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const items = JSON.parse(responseText)

            callback(null, items)
        } else {
            const res = JSON.parse(responseText)

            callback(new Error(res.error))
        }
    }

    xhr.open('GET', 'https://imdb-api.com/en/API/Search/k_8kl21rl4/' + query)

    xhr.send()
}

module.exports = searchItems
// HINT get an access token https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
// HINT api reference doc https://developer.spotify.com/documentation/web-api/reference/

function searchArtists(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const results = JSON.parse(responseText)

            callback(null, results.artists.items)
        }
    }

    xhr.open('GET', 'https://api.spotify.com/v1/search?type=artist&q=' + query)
    
    xhr.setRequestHeader('Authorization', 'Bearer BQDhI9QiWx-p_cldsjA71O9iTADmdHIJCZmreOR_vP3fTgyQB-ay9bB5RPYvxV6q6Xl4rYUCmlsmKXIW9jMAFbM4rOjqh-05FxOxnhl1J2weKBeT3UxI8LunN1WrFScLIus8WbmrZYYCXYX0boMwrM6GtI8c6X5h')

    xhr.send()
}

function searchAlbums(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const results = JSON.parse(responseText)

            callback(null, results.albums.items)
        }
    }

    xhr.open('GET', 'https://api.spotify.com/v1/search?type=album&q=' + query)
    
    xhr.setRequestHeader('Authorization', 'Bearer BQDhI9QiWx-p_cldsjA71O9iTADmdHIJCZmreOR_vP3fTgyQB-ay9bB5RPYvxV6q6Xl4rYUCmlsmKXIW9jMAFbM4rOjqh-05FxOxnhl1J2weKBeT3UxI8LunN1WrFScLIus8WbmrZYYCXYX0boMwrM6GtI8c6X5h')

    xhr.send()
}

function retrieveArtist(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const result = JSON.parse(responseText)

            callback(null, result)
        }
    }

    xhr.open('GET', 'https://api.spotify.com/v1/artists/' + id)
    
    xhr.setRequestHeader('Authorization', 'Bearer BQDhI9QiWx-p_cldsjA71O9iTADmdHIJCZmreOR_vP3fTgyQB-ay9bB5RPYvxV6q6Xl4rYUCmlsmKXIW9jMAFbM4rOjqh-05FxOxnhl1J2weKBeT3UxI8LunN1WrFScLIus8WbmrZYYCXYX0boMwrM6GtI8c6X5h')

    xhr.send()
}

function retrieveArtistAlbums(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const result = JSON.parse(responseText)

            callback(null, result.items)
        }
    }

    xhr.open('GET', 'https://api.spotify.com/v1/artists/' + id + '/albums')
    
    xhr.setRequestHeader('Authorization', 'Bearer BQDhI9QiWx-p_cldsjA71O9iTADmdHIJCZmreOR_vP3fTgyQB-ay9bB5RPYvxV6q6Xl4rYUCmlsmKXIW9jMAFbM4rOjqh-05FxOxnhl1J2weKBeT3UxI8LunN1WrFScLIus8WbmrZYYCXYX0boMwrM6GtI8c6X5h')

    xhr.send()
}
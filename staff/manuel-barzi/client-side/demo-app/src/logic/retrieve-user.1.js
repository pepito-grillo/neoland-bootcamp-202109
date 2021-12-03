import context from './context'

function retrieveUser(token) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    return fetch(`${context.API_URL}/v2/users`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
            } else if (status === 401 || status === 404) {
                return res.json()
                    .then(content => {
                        throw new Error(content.error)
                    })
            } else throw new Error('unknow error')
        })
}

export default retrieveUser
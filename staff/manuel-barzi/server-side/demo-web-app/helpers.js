function getUserId(cookie) {
    if (cookie) {
        const [, id] = cookie.split('=')

        return id
    }
}

module.exports = {
    getUserId
}
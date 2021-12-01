/**
 * TODO
 * 
 * @param {*} username 
 * @param {*} password 
 * @param {*} callback 
 */
function signinUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError(`${username} is not a string`)
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = JSON.parse(responseText)

            const token = response.token

            callback(null, token)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { username, password }

    xhr.send(JSON.stringify(body))
}

export default signinUser
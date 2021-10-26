// logic

function signupUser(name, username, password, callback) {
    if (!name.length) throw new Error('name is empty')
    if (!username.length) throw new Error('username is empty')
    if (!password.length) throw new Error('password is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 409 || status === 400) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            callback(new Error(message))
        } else if (status === 201) {
            callback(null)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'

    xhr.send(body)
}

function signinUser(username, password, callback) {
    if (!username.length) throw new Error('username is empty')
    if (!password.length) throw new Error('password is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            callback(new Error(message))
        } else if (status === 200) {
            var response = xhr.responseText

            token = response.slice(10, -2)

            callback(null, token)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "username": "' + username + '", "password": "' + password + '" }'

    xhr.send(body)
}

function retrieveUser(token, callback) {
    if (!token) throw new Error('invalid token')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            callback(new Error(message))
        } else if (status === 200) {
            var response = xhr.responseText

            var user = JSON.parse(response)

            callback(null, user)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

// views

var landingContainer = document.querySelector('.landing')
var signupContainer = document.querySelector('.signup')
var signinContainer = document.querySelector('.signin')
var postSignupContainer = document.querySelector('.post-signup')
var homeContainer = document.querySelector('.home')
var profileContainer = document.querySelector('.profile')
var unregisterContainer = document.querySelector('.unregister')

var token

var landingButtons = landingContainer.querySelectorAll('button')

var signupButton = landingButtons[1]

signupButton.onclick = function () {
    landingContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}

var landingSigninButton = landingButtons[0]

landingSigninButton.onclick = function () {
    landingContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signupSigninButton = signupContainer.querySelector('button')

signupSigninButton.onclick = function (event) {
    event.preventDefault()

    signupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var signinSignupButton = signinContainer.querySelector('button')

signinSignupButton.onclick = function (event) {
    event.preventDefault()

    signinContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}

signupContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signupContainer.querySelectorAll('input')

    var nameInput = inputs[0]
    var usernameInput = inputs[1]
    var passwordInput = inputs[2]

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    try {
        signupUser(name, username, password, function (error) {
            if (error) return alert(error.message)

            signupContainer.reset()

            signupContainer.classList.add('container--off')

            postSignupContainer.classList.remove('container--off')
        })
    } catch (error) {
        alert(error.message)
    }
}

var postSignupSigninButton = postSignupContainer.querySelector('button')

postSignupSigninButton.onclick = function () {
    postSignupContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

signinContainer.onsubmit = function (event) {
    event.preventDefault()

    var inputs = signinContainer.querySelectorAll('input')

    var usernameInput = inputs[0]
    var passwordInput = inputs[1]

    var username = usernameInput.value
    var password = passwordInput.value

    try {
        signinUser(username, password, function (error, _token) {
            if (error) return alert(error.message)

            token = _token

            signinContainer.reset()

            try {
                retrieveUser(token, function (error, user) {
                    if (error) return alert(error.message)

                    var name = user.name

                    signinContainer.classList.add('container--off')

                    var nameSpan = homeContainer.querySelector('.name')

                    nameSpan.innerText = name

                    homeContainer.classList.remove('container--off')
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

var homeButtons = homeContainer.querySelectorAll('button')

var homeProfileButton = homeButtons[0]

var profileForm = profileContainer.querySelector('form')

homeProfileButton.onclick = function () {
    homeContainer.classList.add('container--off')

    profileForm.reset()

    profileContainer.classList.remove('container--off')
}

var homeSignoutButton = homeButtons[1]

homeSignoutButton.onclick = function () {
    homeContainer.classList.add('container--off')

    signinContainer.classList.remove('container--off')
}

var profileBackButton = profileForm.querySelector('button')

profileBackButton.onclick = function (event) {
    event.preventDefault()

    profileContainer.classList.add('container--off')

    homeContainer.classList.remove('container--off')
}

profileForm.onsubmit = function (event) {
    event.preventDefault()

    var inputs = profileForm.querySelectorAll('input')

    var oldPasswordInput = inputs[0]
    var passwordInput = inputs[1]

    var oldPassword = oldPasswordInput.value
    var password = passwordInput.value

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 400 || status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 204) {
            profileContainer.classList.add('container--off')

            profileForm.reset()

            homeContainer.classList.remove('container--off')
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "oldPassword": "' + oldPassword + '", "password" : "' + password + '" }'

    xhr.send(body)
}

var profileUnregisterButton = profileContainer.querySelector('.profile>button')

profileUnregisterButton.onclick = function () {
    profileContainer.classList.add('container--off')

    unregisterContainer.classList.remove('container--off')
}

var unregisterBackButton = unregisterContainer.querySelector('button')

var unregisterForm = unregisterContainer.querySelector('form')

unregisterBackButton.onclick = function (event) {
    event.preventDefault()

    unregisterContainer.classList.add('container--off')

    unregisterForm.reset()

    profileContainer.classList.remove('container--off')
}

unregisterForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = unregisterForm.querySelector('input')

    var password = passwordInput.value

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 400 || status === 401) {
            var response = xhr.responseText

            var message = response.slice(10, -2)

            return alert(message)
        }

        if (status === 204) {
            unregisterContainer.classList.add('container--off')

            unregisterForm.reset()

            landingContainer.classList.remove('container--off')
        }
    }

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = '{ "password" : "' + password + '" }'

    xhr.send(body)
}
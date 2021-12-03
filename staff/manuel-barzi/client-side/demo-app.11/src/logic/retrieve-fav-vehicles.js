function retrieveFavVehicles(token, callback) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            const response = responseText

            const user = JSON.parse(response)

            const { favs = [] } = user

            if (favs.length) {
                let count = 0
                const vehicles = []

                favs.forEach((id, index) => {
                    const xhr2 = new XMLHttpRequest

                    xhr2.onload = () => {
                        const { status, responseText } = xhr2

                        if (status === 200) {
                            const vehicle = JSON.parse(responseText)

                            if (!vehicle) return callback(new Error(`no vehicle found with id ${id}`))

                            count++

                            vehicles[index] = vehicle

                            if (count === favs.length) {
                                vehicles.forEach(vehicle => vehicle.isFav = true)

                                callback(null, vehicles)
                            }
                        }
                    }

                    xhr2.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)

                    xhr2.send()
                })
            } else callback(null, [])
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveFavVehicles
function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const vehicle = JSON.parse(responseText)

            if (!vehicle) return callback(new Error(`no vehicle found with id ${id}`))

            callback(null, vehicle)
        }
    }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)

    xhr.send()
}

export default retrieveVehicle
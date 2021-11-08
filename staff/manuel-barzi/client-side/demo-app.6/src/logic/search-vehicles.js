function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 200) {
            const vehicles = JSON.parse(responseText)

            callback(null, vehicles)
        }
    }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

    xhr.send()
}

export default searchVehicles
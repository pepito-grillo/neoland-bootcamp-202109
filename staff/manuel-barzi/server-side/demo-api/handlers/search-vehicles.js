const { searchVehicles } = require('vehicles')

module.exports = (req, res) => {
    const { query: { q } } = req

    try {
        searchVehicles(q, (error, vehicles) => {
            if (error) return res.status(500).json({ error: error.message })

            res.json(vehicles)
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
class Home extends React.Component {
    constructor() {
        super()

        this.state = { vehicles: [], vehicle: null }
    }

    render() {
        return <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">World</span>!</p>
                <button className="button button-medium button--dark">Profile</button>
                <button className="button button-medium button">Sign out</button>
            </div>

            <Search onSearch={query => {
                try {
                    searchVehicles(query, (error, vehicles) => {
                        if (error) return alert(error.message)

                        //this.setState({ vehicles: vehicles })
                        this.setState({ vehicles })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />

            {!this.state.vehicle && <Results items={this.state.vehicles} onItem={vehicleId => {
                try {
                    retrieveVehicle(vehicleId, (error, vehicle) => {
                        if (error) return alert(error.message)

                        this.setState({ vehicle })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />}

            {this.state.vehicle && <Detail item={this.state.vehicle} />}
        </div>
    }
}
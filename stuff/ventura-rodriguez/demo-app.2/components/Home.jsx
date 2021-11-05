class Home extends React.Component {
    constructor() {
        logger.info('Home -> constructor')

        super()

        this.state = { vehicles: [], vehicle: null }
    }

    onSearch = query => {
        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) return alert(error.message)

                //this.setState({ vehicles: vehicles })
                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    onItem = vehicleId => {
        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
                if (error) return alert(error.message)

                this.setState({ vehicle })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.info('Home -> render')

        return <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{this.props.name? this.props.name : 'World'}</span>!</p>
                <button className="button button-medium button--dark">Profile</button>
                <button className="button button-medium button" onClick={this.props.onSignOut}>Sign out</button>
            </div>

            <Search onSearch={this.onSearch} />

            {!this.state.vehicle && <Results items={this.state.vehicles} onItem={this.onItem} />}

            {this.state.vehicle && <Detail item={this.state.vehicle} />}
        </div>
    }
}
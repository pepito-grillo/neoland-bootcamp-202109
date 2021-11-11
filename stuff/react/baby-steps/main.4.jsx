class Vehicles extends React.Component {
    constructor() {
        super()

        this.state = { vehicles: [] }
    }
    render() {
        return <>
            <form onSubmit={event => {
                event.preventDefault()

                const query = event.target.query.value // DOM API

                // TODO call searchVehicles

                try {
                    searchVehicles(query, (error, vehicles) => {
                        if (error) return alert(error.message)

                        //this.setState({ vehicles: vehicles })
                        this.setState({ vehicles })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }}>
                <input type="text" placeholder="criteria" name="query" />
                <button>Search</button>
            </form>

            {this.state.vehicles.length ?
                <ul>{this.state.vehicles.map(vehicle => <li>{vehicle.name}</li>)}</ul>
                :
                null
            }
        </>
    }
}

function App() {
    return <>
        <Vehicles />
    </>
}

ReactDOM.render(<App />, document.getElementById('root'))
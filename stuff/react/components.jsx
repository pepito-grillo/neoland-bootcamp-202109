function Search(props) {
    return <form onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value // DOM API

        props.onSearch(query)
    }}>
        <input type="text" placeholder="criteria" name="query" />
        <button>Search</button>
    </form>
}

function Results(props) {
    return props.items.length ?
        <ul>
            {
                props.items.map(item => <li>
                    <h2>{item.name}</h2>
                    <img src={item.thumbnail} />
                    <span>{item.price}</span>
                </li>)
            }
        </ul>
        :
        null
}

class Vehicles extends React.Component {
    constructor() {
        super()

        this.state = { vehicles: [] }
    }
    render() {
        return <>
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

            {/* <Results items={[{ name: 'Sergi' }, { name: 'Adrian' }, { name: 'Noelia' }]} /> */}
            <Results items={this.state.vehicles} />
        </>
    }
}
function Landing(props) {
    return <div className="landing container container--vertical container--gapped">
        <button className="button button--medium button--dark" onClick={() => props.onSignIn()}>Sign in</button>
        <button className="button button--medium" onClick={() => props.onSignUp()}>Sign up</button>
    </div>
}

function SignUp(props) {
    return <form className="signup container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        props.onSignUp(name, username, password)
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="name" />
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />

        <div className="container">
            <button className="button button--medium">Sign in</button>
            <button className="button button--medium button--dark">Sign up</button>
        </div>
    </form>
}

function PostSignUp(props) {
    return <div className="post-signup container container--gapped container--vertical">
        User registered successfully, now you can proceed to <button className="button button--dark button--medium" onClick={() => props.onSignIn()}>Sign
            in</button>
    </div>
}

function Search(props) {
    return <form className="home__search container" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value // DOM API

        props.onSearch(query)
    }}>
        <input className="field" type="text" placeholder="criteria" name="query" />
        <button className="button button--medium button--dark">Search</button>
    </form>
}

function Results(props) {
    return props.items.length ?
        <ul className="home__results container container--vertical">
            {
                props.items.map(item => <li className="home__result" onClick={() => props.onItem(item.id)}>
                    <h2>{item.name}</h2>
                    <img src={item.thumbnail} />
                    <span>{item.price}</span>
                </li>)
            }
        </ul>
        :
        null
}

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

function Detail(props) {
    return <div className="home__detail container container--vertical">
        <h2>{props.item.name}</h2><button className="button button-medium button">Back</button>
        <img className="home__detail-image" src={props.item.image} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste?Beatae velit explicabo temporibus et blanditiis!Deleniti nemo voluptatem cumque nam.</p>
        <time>2021</time>
        <span>100 $</span>
        <span>color</span>
        <span>style</span>
        <span>collection</span>
        <span>maker</span>
        <a href="http://">original</a>
    </div>
}
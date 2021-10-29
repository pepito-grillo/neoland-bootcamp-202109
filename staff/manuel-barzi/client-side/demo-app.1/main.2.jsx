class App extends React.Component {
    constructor() {
        super()

        this.state = { view: !sessionStorage.token ? 'landing' : 'home' }
    }

    render() {
        return <>
            {this.state.view === 'landing' && <Landing
                onSignIn={() => this.setState({ view: 'sign-in' })}
                onSignUp={() => this.setState({ view: 'sign-up' })}
            />}
            {this.state.view === 'sign-in' && <h1>TODO show sign-in</h1>}
            {this.state.view === 'sign-up' && <h1>TODO show sign-up</h1>}
            {this.state.view === 'home' && <h1>TODO show home</h1>}
        </>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
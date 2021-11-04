class App extends React.Component {
    constructor() {
        logger.debug('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? 'spinner' : 'landing',
            name: null
        }
        // this.state = { view: 'home' }
    }

    componentDidMount() {
        logger.debug('App -> componentDidMount')

        if (sessionStorage.token) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        alert(error.message)

                        this.resetTokenAndGoToLanding()

                        return
                    }

                    var name = user.name

                    this.setState({
                        view: 'home',
                        name //name: name
                    })
                })
            } catch (error) {
                alert(error.message)

                this.resetTokenAndGoToLanding()

                return
            }
        }
    }

    resetTokenAndGoToLanding() {
        delete sessionStorage.token

        this.setState({ view: 'landing' })
    }

    render() {
        logger.debug('App -> render')

        return <>
            <Logo image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png" text="Demo App" />
            {/* <Time /> */}

            {this.state.view === 'landing' && <Landing
                onSignIn={() => this.setState({ view: 'signin' })}
                onSignUp={() => this.setState({ view: 'signup' })}
            />}

            {this.state.view === 'signup' && <SignUp onSignUp={(name, username, password) => {
                try {
                    signupUser(name, username, password, error => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        this.setState({ view: 'post-signup' })
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={() => this.setState({ view: 'signin' })} />}

            {this.state.view === 'signin' && <SignIn onSignIn={(username, password) => {
                try {
                    signinUser(username, password, (error, token) => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        sessionStorage.token = token

                        try {
                            retrieveUser(sessionStorage.token, (error, user) => {
                                if (error) {
                                    alert(error.message)

                                    return
                                }

                                var name = user.name

                                this.setState({
                                    view: 'home',
                                    name //name: name
                                })
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    })
                } catch (error) {
                    alert(error.message)
                }
            }} />}

            {this.state.view === 'home' && <Home name={this.state.name} />}

            {this.state.view === 'spinner' && <Spinner />}
        </>
    }
}
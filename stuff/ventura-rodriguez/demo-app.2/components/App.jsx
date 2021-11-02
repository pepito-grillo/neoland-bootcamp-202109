class App extends React.Component {
    constructor() {
        logger.info('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? 'spinner' : 'landing',
            name: null
        }
        // this.state = { view: 'home' }

        // this.goToSignIn = function() { this.setState({ view: 'signin' }) }.bind(this)
        // this.goToSignIn = () => this.setState({ view: 'signin' })
    }

    componentDidMount() {
        logger.info('App -> componentDidMount')

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

    // resetTokenAndGoToLanding() {
    //     delete sessionStorage.token

    //     this.setState({ view: 'landing' })
    // }

    // resetTokenAndGoToLanding = function() {
    //     delete sessionStorage.token

    //     this.setState({ view: 'landing' })
    // }.bind(this)

    resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        this.setState({ view: 'landing' })
    }

    goToSignIn = () => this.setState({ view: 'signin' })

    goToSignUp = () => this.setState({ view: 'signup' })

    goToSpinner = () => this.setState({ view: 'spinner' })

    onSignUp = (name, username, password) => {
        this.goToSpinner()

        try {
            signupUser(name, username, password, error => {
                if (error) {
                    alert(error.message)

                    this.goToSignUp()

                    return
                }

                this.setState({ view: 'post-signup' })
            })
        } catch (error) {
            alert(error.message)

            this.goToSignUp()
        }
    }

    onSignIn = (username, password) => {
        this.goToSpinner()

        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    this.goToSignIn()

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(sessionStorage.token, (error, user) => {
                        if (error) {
                            alert(error.message)
                                
                            this.goToSignIn()

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

                    this.goToSignIn()
                }
            })
        } catch (error) {
            alert(error.message)

            this.goToSignIn()
        }
    }

    render() {
        logger.info('App -> render')

        return <>
            <Logo image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png" text="Demo App" />
            {/* <Time /> */}

            {this.state.view === 'landing' && <Landing
                onSignIn={this.goToSignIn}
                onSignUp={this.goToSignUp}
            />}

            {this.state.view === 'signup' && <SignUp onSignUp={this.onSignUp} onSignIn={this.goToSignIn} />}

            {this.state.view === 'post-signup' && <PostSignUp onSignIn={this.goToSignIn} />}

            {this.state.view === 'signin' && <SignIn onSignIn={this.onSignIn} onSignUp={this.goToSignUp} />}

            {this.state.view === 'home' && <Home name={this.state.name} onSignOut={this.resetTokenAndGoToLanding} />}

            {this.state.view === 'spinner' && <Spinner />}
        </>
    }
}
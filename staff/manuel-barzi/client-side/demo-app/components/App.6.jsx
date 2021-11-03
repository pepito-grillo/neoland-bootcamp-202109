class App extends React.Component {
    constructor() {
        logger.info('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? '' : 'landing',
            name: null,
            spinner: sessionStorage.token ? true : false
        }
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
                        name,
                        spinner: false
                    })
                })
            } catch (error) {
                alert(error.message)

                this.resetTokenAndGoToLanding()

                return
            }
        }
    }

    resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        this.setState({ 
            view: 'landing', 
            spinner: false 
        })
    }

    goToSignIn = () => this.setState({ view: 'signin' })

    goToSignUp = () => this.setState({ view: 'signup' })

    showSpinner = () => this.setState({ spinner: true })

    hideSpinner = () => this.setState({ spinner: false })

    onSignUp = (name, username, password) => {
        this.showSpinner()

        try {
            signupUser(name, username, password, error => {
                if (error) {
                    alert(error.message)

                    this.hideSpinner()

                    return
                }

                this.setState({ 
                    view: 'post-signup',
                    spinner: false
                })
            })
        } catch (error) {
            alert(error.message)

            this.hideSpinner()
        }
    }

    onSignIn = (username, password) => {
        this.showSpinner()

        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    this.hideSpinner()

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(sessionStorage.token, (error, user) => {
                        if (error) {
                            alert(error.message)
                                
                            this.hideSpinner()

                            return
                        }

                        var name = user.name

                        this.setState({
                            view: 'home',
                            name,
                            spinner: false
                        })
                    })
                } catch (error) {
                    alert(error.message)

                    this.hideSpinner()
                }
            })
        } catch (error) {
            alert(error.message)

            this.hideSpinner()
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

            {this.state.spinner && <Spinner />}
        </>
    }
}
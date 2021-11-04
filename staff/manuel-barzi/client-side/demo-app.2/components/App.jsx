const { Component } = React

class App extends Component {
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

        const { token } = sessionStorage
        const { resetTokenAndGoToLanding } = this

        if (token) {
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {
                        alert(error.message)

                        resetTokenAndGoToLanding()

                        return
                    }

                    var name = user.name

                    this.setState({
                        view: 'home',
                        name,
                        spinner: false
                    })
                })
                //} catch (error) {
            } catch ({ message }) {
                // alert(error.message)
                // const { message } = error

                alert(message)

                resetTokenAndGoToLanding()

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

    signUp = (name, username, password) => {
        const { showSpinner, hideSpinner } = this

        showSpinner()

        try {
            signupUser(name, username, password, error => {
                if (error) {
                    alert(error.message)

                    hideSpinner()

                    return
                }

                this.setState({
                    view: 'post-signup',
                    spinner: false
                })
            })
        } catch ({ message }) {
            alert(message)

            hideSpinner()
        }
    }

    signIn = (username, password) => {
        const { showSpinner, hideSpinner } = this

        showSpinner()

        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    hideSpinner()

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            alert(error.message)

                            hideSpinner()

                            return
                        }

                        const { name } = user

                        this.setState({
                            view: 'home',
                            name,
                            spinner: false
                        })
                    })
                } catch ({ message }) {
                    alert(message)

                    hideSpinner()
                }
            })
        } catch ({ message }) {
            alert(message)

            hideSpinner()
        }
    }

    render() {
        logger.info('App -> render')

        const { goToSignIn, goToSignUp, signUp, signIn, resetTokenAndGoToLanding, showSpinner, hideSpinner, state: { view, name, spinner } } = this

        return <>
            <Logo image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png" text="Demo App" />
            <Time />

            {view === 'landing' && <Landing
                onSignIn={goToSignIn}
                onSignUp={goToSignUp}
            />}

            {view === 'signup' && <SignUp onSignUp={signUp} onSignIn={goToSignIn} />}

            {view === 'post-signup' && <PostSignUp onSignIn={goToSignIn} />}

            {view === 'signin' && <SignIn onSignIn={signIn} onSignUp={goToSignUp} />}

            {view === 'home' &&
                <Home
                    name={name}
                    onSignOut={resetTokenAndGoToLanding}
                    onFlowStart={showSpinner}
                    onFlowEnd={hideSpinner}
                />}

            {spinner && <Spinner />}
        </>
    }
}
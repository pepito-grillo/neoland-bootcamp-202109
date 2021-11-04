const { Component } = React

class App extends Component {
    constructor() {
        logger.debug('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? '' : 'landing',
            name: null,
            spinner: sessionStorage.token ? true : false,
            feedback: null,
            level: 'error'
        }
    }

    componentDidMount() {
        logger.debug('App -> componentDidMount')

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

                showFeedback(message, 'warn')

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
        const { showSpinner, hideSpinner, showFeedback } = this

        showSpinner()

        try {
            signupUser(name, username, password, error => {
                if (error) {
                    hideSpinner()
                    
                    showFeedback(error.message)

                    return
                }

                this.setState({
                    view: 'post-signup',
                    spinner: false
                })
            })
        } catch ({ message }) {
            hideSpinner()
            
            showFeedback(message, 'warn')
        }
    }

    signIn = (username, password) => {
        const { showSpinner, hideSpinner, showFeedback } = this

        showSpinner()

        try {
            signinUser(username, password, (error, token) => {
                if (error) {
                    hideSpinner()

                    showFeedback(error.message)

                    return
                }

                sessionStorage.token = token

                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            hideSpinner()

                            showFeedback(error.message)

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
                    hideSpinner()
                    
                    showFeedback(message, 'warn')
                }
            })
        } catch ({ message }) {
            hideSpinner()
            
            showFeedback(message, 'warn')
        }
    }

    acceptFeedback = () => this.setState({ feedback: null })

    showFeedback = (message, level = 'error') => this.setState({ feedback: message, level })  

    render() {
        logger.debug('App -> render')

        const { goToSignIn, goToSignUp, signUp, signIn, resetTokenAndGoToLanding, showSpinner, hideSpinner, acceptFeedback, showFeedback, state: { view, name, spinner, feedback, level } } = this

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
                    onFeedback={showFeedback}
                />}

            {spinner && <Spinner />}

            {feedback && <Feedback level={level} message={feedback} onAccept={acceptFeedback} />}
        </>
    }
}
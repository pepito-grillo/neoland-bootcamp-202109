import { useState, useEffect } from 'react'
import logger from '../logger'
import { retrieveUser, signupUser, signinUser } from '../logic'
import Logo from './Logo'
import Time from './Time'
import Landing from './Landing'
import SignUp from './SignUp'
import PostSignUp from './PostSignUp'
import SignIn from './SignIn'
import Home from './Home'
import Spinner from './Spinner'
import Feedback from './Feedback'

function App() {
    logger.debug('App -> render')

    const [view, setView] = useState(sessionStorage.token ? '' : 'landing')
    const [name, setName] = useState(null)
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [feedback, setFeedback] = useState(null)
    const [level, setLevel] = useState(null)

    useEffect(() => {
        logger.debug('App -> useEffect (componentDidMount)')

        const { token } = sessionStorage

        if (token) {
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {
                        alert(error.message)

                        resetTokenAndGoToLanding()

                        return
                    }

                    const { name } = user

                    setView('home')
                    setName(name)
                    setSpinner(false)
                })
            } catch ({ message }) {
                showFeedback(message, 'warn')

                resetTokenAndGoToLanding()

                return
            }
        }
    }, [])

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView('landing')
        setSpinner(false)
    }

    const goToSignIn = () => setView('signin')

    const goToSignUp = () => setView('signup')

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const signUp = (name, username, password) => {
        showSpinner()

        try {
            signupUser(name, username, password, error => {
                if (error) {
                    hideSpinner()

                    showFeedback(error.message)

                    return
                }

                setView('post-signup')
                setSpinner(false)
            })
        } catch ({ message }) {
            hideSpinner()

            showFeedback(message, 'warn')
        }
    }

    const signIn = (username, password) => {
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

                        setView('home')
                        setName(name)
                        setSpinner(false)
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

    const acceptFeedback = () => setFeedback(null)

    const showFeedback = (message, level = 'error') => {
        setFeedback(message)
        setLevel(level)
    }

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

        {feedback && <Feedback level={level} message={feedback} onAccept={acceptFeedback} />}

        {spinner && <Spinner />}
    </>
}

export default App
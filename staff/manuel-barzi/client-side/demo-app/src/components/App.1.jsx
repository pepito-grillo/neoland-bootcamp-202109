import { useState, useEffect, createContext } from 'react'
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
import AppContext from './AppContext'

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
                retrieveUser(token)
                    .then(user => {
                        const { name } = user

                        setView('home')
                        setName(name)
                        setSpinner(false)
                    })
                    .catch(error => {
                        showFeedback(error.message, 'error')

                        resetTokenAndGoToLanding()
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
            signupUser(name, username, password)
                .then(() => {
                    hideSpinner()

                    setView('post-signup')
                })
                .catch(error => {
                    hideSpinner()

                    showFeedback(error.message, 'error')
                })
        } catch ({ message }) {
            hideSpinner()

            showFeedback(message, 'warn')
        }
    }

    const signIn = (username, password) => {
        showSpinner()

        try {
            signinUser(username, password)
                .then(token => {
                    sessionStorage.token = token

                    try {
                        retrieveUser(token, (error, user) => {
                            if (error) {
                                hideSpinner()

                                showFeedback(error.message, 'error')

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
                .catch(error => {
                    hideSpinner()

                    showFeedback(error.message)
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
        <AppContext.Provider value={{
            onFlowStart: showSpinner,
            onFlowEnd: hideSpinner,
            onFeedback: showFeedback
        }}>
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
        </AppContext.Provider>
    </>
}

export default App
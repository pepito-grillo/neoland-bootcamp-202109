import { useState } from 'react'
import logger from '../logger'
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

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'landing')
    const [spinner, setSpinner] = useState(sessionStorage.token ? true : false)
    const [feedback, setFeedback] = useState(null)
    const [level, setLevel] = useState(null)

    const resetTokenAndGoToLanding = () => {
        delete sessionStorage.token

        setView('landing')
        setSpinner(false)
    }

    const goToSignIn = () => setView('signin')

    const goToSignUp = () => setView('signup')

    const showSpinner = () => setSpinner(true)

    const hideSpinner = () => setSpinner(false)

    const goToPostSignUp = () => setView('post-signup')

    const goToHome = () => setView('home')

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

            {view === 'signup' && <SignUp onSignedUp={goToPostSignUp} onSignIn={goToSignIn} />}

            {view === 'post-signup' && <PostSignUp onSignIn={goToSignIn} />}

            {view === 'signin' && <SignIn onSignedIn={goToHome} onSignUp={goToSignUp} />}

            {view === 'home' &&
                <Home onSignOut={resetTokenAndGoToLanding} onAuthError={resetTokenAndGoToLanding} />}

            {feedback && <Feedback level={level} message={feedback} onAccept={acceptFeedback} />}

            {spinner && <Spinner />}
        </AppContext.Provider>
    </>
}

export default App
function Landing({ onSignIn, onSignUp }) {
    logger.debug('Landing -> render')
    return <div className="landing container container--vertical container--gapped">
        <button className="button button--medium button--dark" onClick={() => {
            logger.debug('calling sign in')
            onSignIn()
        }}>Sign in</button>
        <button className="button button--medium" onClick={onSignUp}>Sign up</button>
    </div>
}
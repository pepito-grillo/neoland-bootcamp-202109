function Landing(props) {
    logger.info('Landing -> render')
    return <div className="landing container container--vertical container--gapped">
        <button className="button button--medium button--dark" onClick={props.onSignIn}>Sign in</button>
        <button className="button button--medium" onClick={props.onSignUp}>Sign up</button>
    </div>
}
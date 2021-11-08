function Landing(props) {
    return <div className="landing container container--vertical container--gapped">
            <button type="button" className="button button--medium button--dark" onClick={() => props.onSignIn()}>Sign in</button>
            <button type="button" className="button button--medium" onClick={() => props.onSignUp()}>Sign up</button>
        </div>
}

export default Landing
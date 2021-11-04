function SignUp(props) {
    logger.debug('SignUp -> render')
    
    return <form className="signup container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        props.onSignUp(name, username, password)
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="name" />
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />

        <div className="container">
            <button className="button button--medium">Sign in</button>
            <button className="button button--medium button--dark">Sign up</button>
        </div>
    </form>
}
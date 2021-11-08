function SignIn(props) {
    return <form className="signin container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        props.signIn(username, password)
        
    }} >
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />

        <div className="container">
            <button className="button button--medium" onClick={() => props.onSignUp()}>Sign up</button>
            <button className="button button--medium button--dark">Sign in</button>
        </div>
    </form>
}

export default SignIn
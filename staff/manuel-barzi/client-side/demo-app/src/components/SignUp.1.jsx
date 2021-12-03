import logger from '../../../demo-app.11/src/logger'

function SignUp({ onSignUp, onSignIn }) {
    logger.debug('SignUp -> render')

    return <form className="container container--vertical container--gapped" onSubmit={event => {
        event.preventDefault()

        const { target: { name: { value: name }, username: { value: username }, password: { value: password } } } = event

        onSignUp(name, username, password)
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="name" />
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />

        <div className="container">
            <button className="button button--medium" onClick={event => {
                event.preventDefault()

                // props.onSignIn()                
                onSignIn()
            }}>Sign in</button>
            <button className="button button--medium button--dark">Sign up</button>
        </div>
    </form>
}

export default SignUp
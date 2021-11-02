// function Landing(props) {
//     logger.info('Landing -> render')
//     return <div className="landing container container--vertical container--gapped">
        // <button className="button button--medium button--dark" onClick={() => props.onSignIn()}>Sign in</button>
        // <button className="button button--medium" onClick={() => props.onSignUp()}>Sign up</button>
//     </div>
// }

const Landing = props => {
    console.log(props);
    logger.info("Landing render")
    return <React.Fragment>
        <h1>Landing</h1>
        <button type="button" onClick={() => props.goToLogin()}>go to login</button>
        <button type="button" onClick={() => props.goToRegister()}>go to register</button>
    </React.Fragment>
}
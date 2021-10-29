// function Landing(props) {
//     return <div className="landing container container--vertical container--gapped">
//         <button className="button button--medium button--dark" onClick={() => props.onSignIn()}>Sign in</button>
//         <button className="button button--medium" onClick={() => props.onSignUp()}>Sign up</button>
//     </div>
// }

/** Hay que mandarle las funciones de los botones `props.onSignIn()` `props.onSignUp()`*/
function Landing(props) {
    return (
    <div className="landing container container--vertical container--gapped">
        <button className="button button--medium button--dark" onClick={() => props.onSignIn()}>to login</button>
        <button className="button button--medium" onClick={() => props.onSignUp()}>to register</button>
    </div>
    )
}
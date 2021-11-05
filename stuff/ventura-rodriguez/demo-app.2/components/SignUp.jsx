// function SignUp(props) {
//     logger.info('SignUp -> render')
    
//     return <form className="signup container container--vertical container--gapped" onSubmit={event => {
//         event.preventDefault()

//         const name = event.target.name.value
//         const username = event.target.username.value
//         const password = event.target.password.value

//         props.onSignUp(name, username, password)
//     }}>
//         <input className="field" type="text" name="name" id="name" placeholder="name" />
//         <input className="field" type="text" name="username" id="username" placeholder="username" />
//         <input className="field" type="password" name="password" id="password" placeholder="password" />

//         <div className="container">
//             <button className="button button--medium" onClick={event => {
//                 event.preventDefault()

//                 props.onSignIn()                
//             }}>Sign in</button>
//             <button className="button button--medium button--dark">Sign up</button>
//         </div>
//     </form>
// }


const signUp = (event, callback) => {
    event.preventDefault()

    const inputName = event.target.name
    const inputUsername = event.target.username
    const inputPassword = event.target.password

    const name = inputName.value
    const username = inputUsername.value
    const password = inputPassword.value

    const user = {name, username, password}

    callback(user)
}

// Usar el preventDefault para no refrescar la página al envio del formulario

// Recoger los valores de los inputs

// Guardar esos valores en un objeto


//Esto está manejado directamente desde el App
// Usar mi función de lógica de negocio correspondiente

// Manejar la respuesta devuelta de la función


const SignUp = props => {
    logger.info('SignUp -> render')

    return <React.Fragment>
        <form className="signup container container--vertical container--gapped"
        onSubmit={event => signUp(event, props.registerUser)}>
            <input className="field" type="text" name="name" id="name" placeholder="name" />
            <input className="field" type="text" name="username" id="username" placeholder="username" />
            <input className="field" type="password" name="password" id="password" placeholder="password" />
            <div className="container">
                <button type="button" className="button button--medium" onClick={() => props.goToLogin()}>
                    go to login
                </button>
                <button type="submit" className="button button--medium">Register</button>
            </div>
        </form>
    </React.Fragment>
}
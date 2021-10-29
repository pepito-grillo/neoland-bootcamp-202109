function SignUp(props) {
    return (
        <form className="signup container container--vertical container--gapped" onSubmit={event => {
            event.preventDefault()
            const user = {
                name     : event.target.name.value,
                username : event.target.username.value,
                password : event.target.password.value
            }
            try {
                signupUser(user, (error) => {
                    if (error) {
                        alert(error.message)
                    } else {
                        alert("usuario registrado correctamente")
                        event.target.reset()
                        props.onSignIn()
                    }
                })
            }
            catch (error) {
                alert(error.message)
            }
        }}>
            <input className="field" type="text" name="name" id="name" placeholder="name"></input>
            <input className="field" type="text" name="username" id="username" placeholder="username"></input>
            <input className="field" type="password" name="password" id="password" placeholder="password"></input>
        
            <div className="container">
               <button type="button" className="button button--medium" onClick={() => props.onSignIn()}>
                   to login
                </button>
               <button className="button button--medium button--dark">
                   Sign up
                </button>
            </div>
        </form>
    )
}
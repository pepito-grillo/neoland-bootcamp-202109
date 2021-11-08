class App extends React.Component {
    constructor() {
        super()
        this.state = { view: null }
        logger.info("App ===> constructor")
    }
    
    // No lo tiene React incoprporado
    // getState() {
    //     return this.state
    // }
    // setState(x) {
    //     this.state = x
    //     return this.getState()
    // }

    componentDidMount() {
        logger.info("App ===> mount")
        this.setState({view: "landing"})
    }
    
    render() {
        logger.info("App ===> render")
        return <React.Fragment>
            {
                this.state.view === "landing" && <Landing goToLogin={() => this.setState({view: "login"})}
                goToRegister={() => this.setState({view: "register"})}></Landing>
                // if(this.state === "landing") return Landing
            }
            {
                this.state.view === "login" && <p>Estoy en login</p>
            }
            {
                this.state.view === "register" && <SignUp goToLogin={() => this.setState({view: "login"})}
                registerUser={user => this.registerUser(user)}></SignUp>
            }
        </React.Fragment>
    }

    componentWillUnmount() {
        logger.info("App ===> unmount")
    }

    // ----- Own methods -----

    registerUser(user) {
        try {
            signupUser(user, err => {
                if(err) alert(err.message)
                else this.setState({view: "login"})
            })
        }
        catch (err) {
            alert(err.message)
        }
    }
    // Usar mi función de lógica de negocio correspondiente
    // Manejar la respuesta devuelta de la función
}
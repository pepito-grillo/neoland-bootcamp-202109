const { Component } = React

class Profile extends Component {
    constructor() {
        logger.debug('Profile -> constructor')

        super()

        this.state = { view: 'update-password' }
    }

    goToUnregister = () => this.setState({ view: 'unregister' })

    goToUpdatePassword = () => this.setState({ view: 'update-password' })

    render() {
        logger.debug('Profile -> render')

        const { props: { onPasswordUpdate, onBack, onUnregister }, state: { view }, goToUnregister, goToUpdatePassword } = this

        return <>
            {this.state.view === 'update-password' && <div className="profile container container--vertical">
                <form className="container container--vertical" onSubmit={event => {
                    event.preventDefault()

                    // const oldPassword = event.target.oldPassword.value
                    // const password = event.target.password.value
                    const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                    onPasswordUpdate(oldPassword, password)
                }}>
                    <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                    <input className="field" type="password" name="password" id="password" placeholder="new password" />

                    <div className="container">
                        <button className="button button--medium" onClick={event => {
                            event.preventDefault()

                            onBack()
                        }}>Go back</button>
                        <button className="button button--medium button--dark">Update</button>
                    </div>
                </form>

                <button className="button button--medium button--dark" onClick={goToUnregister}>Unregister</button>
            </div>}

            {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={onUnregister} />}
        </>
    }
}
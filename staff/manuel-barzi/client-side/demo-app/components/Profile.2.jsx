class Profile extends React.Component {
    constructor() {
        logger.info('Profile -> constructor')

        super()

        this.state = { view: 'update-password' }
    }

    goToUnregister = () => this.setState({ view: 'unregister' })

    goToUpdatePassword = () => this.setState({ view: 'update-password' })

    render() {
        logger.info('Profile -> render')

        return <>
            {this.state.view === 'update-password' && <div className="profile container container--vertical">
                <form className="container container--vertical" onSubmit={event => {
                    event.preventDefault()

                    const oldPassword = event.target.oldPassword.value
                    const password = event.target.password.value

                    this.props.onPasswordUpdate(oldPassword, password)
                }}>
                    <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                    <input className="field" type="password" name="password" id="password" placeholder="new password" />

                    <div className="container">
                        <button className="button button--medium" onClick={event => {
                            event.preventDefault()

                            this.props.onBack()
                        }}>Go back</button>
                        <button className="button button--medium button--dark">Update</button>
                    </div>
                </form>

                <button className="button button--medium button--dark" onClick={this.goToUnregister}>Unregister</button>
            </div>}

            {this.state.view === 'unregister' && <Unregister onBack={this.goToUpdatePassword} onUnregister={this.props.onUnregister} />}
        </>
    }
}
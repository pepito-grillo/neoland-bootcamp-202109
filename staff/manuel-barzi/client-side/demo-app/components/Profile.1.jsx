function Profile(props) {
    logger.info('Profile -> render')

    return <div className="profile container container--vertical">
        <form className="container container--vertical" onSubmit={event => {
            event.preventDefault()

            const oldPassword = event.target.oldPassword.value
            const password = event.target.password.value

            props.onPasswordUpdate(oldPassword, password)
        }}>
            <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
            <input className="field" type="password" name="password" id="password" placeholder="new password" />

            <div className="container">
                <button className="button button--medium" onClick={event => {
                    event.preventDefault()

                    props.onBack()
                }}>Go back</button>
                <button className="button button--medium button--dark">Update</button>
            </div>
        </form>

        <button className="button button--medium button--dark">Unregister</button>
    </div>
}
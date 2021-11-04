function Unregister({ onUnregister, onBack }) {
    logger.info('Unregister -> render')

    return <div className="unregister container container--vertical">
        <form className="container container--vertical" onSubmit={event => {
            event.preventDefault()

            // const password = event.target.password.value
            const { target: { password: { value: password } } } = event // really?

            onUnregister(password)
        }}>
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container">
                <button className="button button--medium" onClick={event => {
                    event.preventDefault()

                    onBack()
                }}>Go back</button>
                <button className="button button--medium button--dark">Unregister</button>
            </div>
        </form>
    </div>
}
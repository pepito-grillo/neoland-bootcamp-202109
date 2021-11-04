function Unregister(props) {
    logger.info('Unregister -> render')

    return <div className="unregister container container--vertical">
        <form className="container container--vertical" onSubmit={event => {
            event.preventDefault()

            const password = event.target.password.value

            props.onUnregister(password)
        }}>
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container">
                <button className="button button--medium" onClick={event => {
                    event.preventDefault()

                    props.onBack()
                }}>Go back</button>
                <button className="button button--medium button--dark">Unregister</button>
            </div>
        </form>
    </div>
}
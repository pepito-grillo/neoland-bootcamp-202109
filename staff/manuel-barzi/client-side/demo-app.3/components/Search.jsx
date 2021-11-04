function Search({ onSearch }) {
    logger.debug('Search -> render')

    return <form className="home__search container" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value // DOM API

        onSearch(query)
    }}>
        <input className="field" type="text" placeholder="criteria" name="query" />
        <button className="button button--medium button--dark">Search</button>
    </form>
}
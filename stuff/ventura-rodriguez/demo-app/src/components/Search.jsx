import React from "react"

function Search({goToResults}) {
    return <React.Fragment>
        <form onSubmit= {event => {
            event.preventDefault()
            const query = event.target.search.value
            goToResults(query)
        }}>
            <input type="text" placeholder="Buscar" name="search"/>
            <button type="submit">Search</button>
        </form>
    </React.Fragment>
}

export default Search
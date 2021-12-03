import logger from '../logger'

import { Outlet } from 'react-router-dom'

function Search({ onSearch, query }) {
    logger.debug('Search -> render')

    return <>
        <form className="container" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value // DOM API

            onSearch(query)
        }}>
            <input className="field" type="text" placeholder="criteria" name="query" defaultValue={query} />
            <button className="button button--medium button--dark">Search</button>
        </form>

        <Outlet />
    </>
}

export default Search
import React from "react"

function Results({ items}) {

    return <React.Fragment>
        <h1>Results</h1>
        <ul className="home__results container container--vertical">
        {
            items.map(({ id, name, thumbnail, price }) => <li className="home__result">
                <h2>{name}</h2>
                <img src={thumbnail} />
                <span>{price}</span>
            </li>)
        }

        </ul>
    </React.Fragment>
}

export default Results
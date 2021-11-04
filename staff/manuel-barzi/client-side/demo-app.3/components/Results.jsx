function Results({ items, onItem }) {
    logger.debug('Results -> render')

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, price }) => <li className="home__result" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <img src={thumbnail} />
                    <span>{price}</span>
                </li>)
            }
        </ul>
        :
        null
}
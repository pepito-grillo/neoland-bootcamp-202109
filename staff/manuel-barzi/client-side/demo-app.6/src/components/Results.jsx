import logger from '../logger'

function Results({ items, onItem }) {
    logger.debug('Results -> render')

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, image, price }) => <li className="home__result" onClick={() => onItem(id)}>
                    <h2>{name}</h2>
                    <img src={thumbnail || image} />
                    <span>{price}</span>
                </li>)
            }
        </ul>
        :
        null
}

export default Results
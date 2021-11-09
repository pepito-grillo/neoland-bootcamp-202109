import logger from '../logger'

function Results({ items, onItem, onToggleFav }) {
    logger.debug('Results -> render')

    return items.length ?
        <ul className="home__results container container--vertical">
            {
                items.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            onToggleFav(id)
                        }}>{isFav ? '💜' : '🤍'}</button>
                    </div>
                    <img src={thumbnail || image} />
                    <span>{price}</span>
                </li>)
            }
        </ul>
        :
        null
}

export default Results
import logger from '../logger'

import './Results.css'
import { useQuery } from '../hooks'
import { useState, useEffect } from 'react'
import { searchVehicles } from '../logic'

function Results({ onItem, onToggleFav, onFlowStart, onFlowEnd, onFeedback  }) {
    logger.debug('Results -> render')

    const [vehicles, setVehicles] = useState()

    const _query = useQuery()

    const query = _query.getParam('q')

    useEffect(() => {
            onFlowStart()
    
    
            try {
                searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                    if (error) {
                        onFlowEnd()
    
                        onFeedback(error.message)
    
                        return
                    }
    
                    setVehicles(vehicles)
    
                    onFlowEnd()
                })
            } catch ({ message }) {
                onFlowEnd()
    
                onFeedback(message, 'warn')
            }
    }, [query])

    return vehicles && vehicles.length ?
        <ul className="results container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            onToggleFav(id)
                        }}>{isFav ? '💜' : '🤍'}</button>
                    </div>
                    <img className="results__image" src={thumbnail || image} />
                    <span>{price} $</span>
                </li>)
            }
        </ul>
        :
        null
}

export default Results
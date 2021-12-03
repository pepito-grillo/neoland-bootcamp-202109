import logger from '../logger'

import './Results.sass'
import { useQueryParams } from '../hooks'
import { useState, useEffect, useContext } from 'react'
import { searchVehicles, toggleFavVehicle } from '../logic'
import AppContext from './AppContext'

function Results({ onItem }) {
    logger.debug('Results -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [vehicles, setVehicles] = useState()

    const queryParams = useQueryParams()

    const query = queryParams.get('q')

    useEffect(() => {
        logger.debug('Results -> useEffect (componentDidMount)')

        try {
            onFlowStart()
        
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                setVehicles(vehicles)
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }, [query])

    const toggleFav = id => {
        try {
            onFlowStart()
        
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }
                
                onFlowEnd()

                setVehicles(vehicles.map(vehicle => {
                    if (vehicle.id === id) {
                        return { ...vehicle, isFav: !vehicle.isFav }
                    }

                    return vehicle
                }))
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    return vehicles && vehicles.length ?
        <ul className="results container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
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
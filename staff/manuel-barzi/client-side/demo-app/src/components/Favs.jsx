import logger from '../logger.js'
import { useState, useEffect } from 'react'
import { retrieveFavVehicles, toggleFavVehicle } from '../logic'
import './Favs.css'

function Favs({ onBack, onItem, onFlowStart, onFlowEnd, onFeedback }) {
    logger.debug('Favs -> render')

    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
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
    }, [])

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setVehicles(vehicles.filter(vehicle => vehicle.id !== id))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    return <>
        <button className="button button--medium" onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</button>

        {vehicles && vehicles.length ?
        <ul className="favs container container--vertical">
            {
                vehicles.map(({ id, name, thumbnail, image, price, isFav }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                    <div className="container">
                        <h2>{name}</h2>
                        <button className="button" onClick={event => {
                            event.stopPropagation()

                            toggleFav(id)
                        }}>{isFav ? '💜' : '🤍'}</button>
                    </div>
                    <img className="favs__image" src={thumbnail || image} />
                    <span>{price} $</span>
                </li>)
            }
        </ul>
        :
        null}
    </>
}

export default Favs
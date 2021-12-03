import logger from '../logger'
import { useParams } from 'react-router-dom'
import { retrieveVehicle, toggleFavVehicle, addVehicleToCart } from '../logic'
import { useState, useEffect, useContext } from 'react'
import AppContext from './AppContext'

function Detail({ onBack }) {
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const { id } = useParams()
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        onFlowStart()

        try {
            retrieveVehicle(sessionStorage.token, id, (error, vehicle) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setVehicle(vehicle)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }, [id])

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const addToCart = id => {
        onFlowStart()

        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    return <div className="container container--vertical">
        {vehicle && <>
            <h2>{vehicle.name}</h2>
            <div className="container">
                <button className="button" onClick={onBack}>Go back</button>
                <button className="button" onClick={() => addToCart(id)}>Add to Cart</button>
                <button className="button" onClick={() => toggleFav(id)}>{vehicle.isFav ? '💜' : '🤍'}</button>
            </div>
            <img className="home__detail-image" src={vehicle.image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste?Beatae velit explicabo temporibus et blanditiis!Deleniti nemo voluptatem cumque nam.</p>
            <time>{vehicle.year}</time>
            <span>{vehicle.price} $</span>
            <span>{vehicle.color}</span>
            <span>{vehicle.style}</span>
            <span>{vehicle.collection}</span>
            <span>{vehicle.maker}</span>
            <a href={vehicle.url}>original</a>
        </>}
    </div>
}

export default Detail
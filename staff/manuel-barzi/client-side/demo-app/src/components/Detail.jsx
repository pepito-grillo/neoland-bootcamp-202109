import logger from '../logger'
import { useParams } from 'react-router-dom'
import { retrieveVehicle } from '../logic'
import { useState, useEffect } from 'react'

function Detail({ onBack, onToggleFav, onAddToCart, onFlowStart, onFlowEnd, onFeedback }) {
    logger.debug('Detail -> render')

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

    return <div className="container container--vertical">
        {vehicle && <>
            <h2>{vehicle.name}</h2>
            <div className="container">
                <button className="button" onClick={onBack}>Go back</button>
                <button className="button" onClick={() => onAddToCart(id)}>Add to Cart</button>
                <button className="button" onClick={() => onToggleFav(id)}>{vehicle.isFav ? '💜' : '🤍'}</button>
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
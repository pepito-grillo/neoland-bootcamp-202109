import logger from '../logger.js'
import './Feedback.css'

function Feedback({ level, message, onAccept }) {
    logger.debug('Feedback -> render')

    if (level === 'success')
        logger.info(message)
    else if (level === 'warn')
        logger.warn(message)
    else if (level === 'error')
        logger.error(message)

    const className = `feedback__text ${level ? `feedback__text--${level}` : ''}`

    return <div className="feedback container container--vertical container--full">
        <div className="panel container container--vertical container--gapped">
            <p className={className}>{message}</p>
            <button className="button button--dark" onClick={onAccept}>Accept</button>
        </div>
    </div>
}

export default Feedback
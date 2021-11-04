import logger from '../logger'

function Logo({ image, text }) {
    logger.debug('Logo -> render')

    return <div className="logo container">
        <img className="logo__image" src={image} />
        <h1 className="logo__text">{text}</h1>
    </div>
}

export default Logo
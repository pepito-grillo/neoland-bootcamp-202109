function Feedback({ level, message, onAccept }) {
    logger.info('Feedback -> render')

    const className = `feedback__text ${level ? `feedback__text--${level}` : ''}`

    return <div className="feedback container container--vertical container--full">
        <div className="panel container container--vertical container--gapped">
            <p className={className}>{message}</p>
            <button className="button button--dark" onClick={onAccept}>Accept</button>
        </div>
    </div>
}
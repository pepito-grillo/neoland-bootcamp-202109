// function Logo(props) {
function Logo({ image, text }) {
    logger.info('Logo -> render')

    // const { image, text } = props

    return <div className="logo container">
        <img className="logo__image" src={image} />
        <h1 className="logo__text">{text}</h1>
    </div>
}
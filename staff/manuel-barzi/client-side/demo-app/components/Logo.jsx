function Logo(props) {
    return <div className="logo container">
        <img className="logo__image" src={props.image} />
        <h1 className="logo__text">{props.text}</h1>
    </div>
}
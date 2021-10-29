function Results(props) {
    return props.items.length ?
        <ul className="home__results container container--vertical">
            {
                props.items.map(item => <li className="home__result" onClick={() => props.onItem(item.id)}>
                    <h2>{item.name}</h2>
                    <img src={item.thumbnail} />
                    <span>{item.price}</span>
                </li>)
            }
        </ul>
        :
        null
}
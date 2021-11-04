function Detail(props) {
    logger.debug('Detail -> render')

    return <div className="home__detail container container--vertical">
        <h2>{props.item.name}</h2><button className="button button-medium button">Back</button>
        <img className="home__detail-image" src={props.item.image} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste?Beatae velit explicabo temporibus et blanditiis!Deleniti nemo voluptatem cumque nam.</p>
        <time>2021</time>
        <span>100 $</span>
        <span>color</span>
        <span>style</span>
        <span>collection</span>
        <span>maker</span>
        <a href="http://">original</a>
    </div>
}
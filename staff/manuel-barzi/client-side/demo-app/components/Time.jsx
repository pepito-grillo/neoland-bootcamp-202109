class Time extends React.Component  {
    constructor() {
        logger.info('Time -> constructor')
        
        super()

        this.state = { time: new Date }

        // setInterval(() => this.setState({ time: new Date }), 1000) // WARN
        // this.setState({ time: new Date }) // WARN (example, do not do this)
    }

    componentDidMount() {
        logger.info('Time -> componentDidMount')
        
        setInterval(() => this.setState({ time: new Date }), 1000)
        // this.setState({ time: new Date })
    }

    render() {
        logger.info('Time -> render')

        return <time className="time container">{this.state.time.toLocaleTimeString()}</time>
    }
}
class Time extends React.Component  {
    constructor() {
        logger.debug('Time -> constructor')
        
        super()

        this.state = { time: new Date }

        // setInterval(() => this.setState({ time: new Date }), 1000) // WARN
        // this.setState({ time: new Date }) // WARN (example, do not do this)
    }

    componentDidMount() {
        logger.debug('Time -> componentDidMount')
        
        setInterval(() => this.setState({ time: new Date }), 1000)
        // this.setState({ time: new Date })
    }

    render() {
        logger.debug('Time -> render')

        return <time className="time container">{this.state.time.toLocaleTimeString()}</time>
    }
}
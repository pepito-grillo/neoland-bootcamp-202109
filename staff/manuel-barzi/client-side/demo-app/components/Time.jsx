class Time extends React.Component  {
    constructor() {
        super()

        this.state = { time: new Date }

        // setInterval(() => this.setState({ time: new Date }), 1000) // WARN
        // this.setState({ time: new Date }) // WARN (example, do not do this)

        console.log('Time -> constructor')
    }

    componentDidMount() {
        setInterval(() => this.setState({ time: new Date }), 1000)
        // this.setState({ time: new Date })

        console.log('Time -> componentDidMount')
    }

    render() {
        console.log('Time -> render')

        return <time className="time container">{this.state.time.toLocaleTimeString()}</time>
    }
}
import { Component } from 'react'
import logger from '../logger'
import './Time.sass'

class Time extends Component {
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
        // logger.debug('Time -> render')

        const { state: { time } } = this

        return <time className="time container">{time.toLocaleTimeString()}</time>
    }
}

export default Time
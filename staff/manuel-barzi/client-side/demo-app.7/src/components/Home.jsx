import { Component } from 'react'
import logger from '../logger'
import {
    searchVehicles,
    retrieveVehicle,
    updateUserPassword,
    unregisterUser,
    toggleFavVehicle,
    retrieveFavVehicles
} from '../logic'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Profile from './Profile'
import Favs from './Favs'
import './Home.css'

class Home extends Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            vehicles: [],
            vehicle: null,
            view: 'search',
            favs: [],
            query: null
        }
    }

    search = query => {
        // const onFlowStart = this.props.onFlowStart
        // const onFlowEnd = this.props.onFlowEnd
        const { props: { onFlowStart, onFlowEnd, onFeedback } } = this

        onFlowStart()

        this.setState({ vehicle: null, vehicles: [], query })

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                this.setState({ vehicles })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    goToItem = vehicleId => {
        const { props: { onFlowStart, onFlowEnd, onFeedback } } = this

        onFlowStart()

        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                this.setState({ vehicle })

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    clearVehicle = () => this.setState({ vehicle: null })

    goToProfile = () => this.setState({ view: 'profile' })

    goToSearch = () => this.setState({ view: 'search' })

    updatePassword = (oldPassword, password) => {
        const { props: { onFlowStart, onFlowEnd, onFeedback } } = this

        onFlowStart()

        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                onFeedback('Password updated', 'success')
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    unregister = password => {
        const { props: { onFlowStart, onFlowEnd, onSignOut, onFeedback } } = this

        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                logger.info('User unregistered')

                onFlowEnd()

                onFeedback('User unregistered', 'success')

                onSignOut()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    toggleFav = id => {
        const { props: { onFlowStart, onFlowEnd, onFeedback }, state: { vehicles, vehicle } } = this

        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                if (vehicle) {
                    this.setState({ vehicle: { ...vehicle, isFav: !vehicle.isFav } })
                }

                if (vehicles.length) {
                    this.setState({
                        vehicles: vehicles.map(vehicle => {
                            if (vehicle.id === id) {
                                vehicle = { ...vehicle, isFav: !vehicle.isFav }
                            }

                            return vehicle
                        })
                    })
                }

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    goToFavs = () => {
        const { props: { onFlowStart, onFlowEnd, onFeedback } } = this

        onFlowStart()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                this.setState({ view: 'favs', favs })
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    render() {
        logger.debug('Home -> render')

        const {
            state: { view, vehicle, vehicles, favs, query },
            props: { name, onSignOut },
            goToProfile,
            goToItem,
            clearVehicle,
            updatePassword,
            goToSearch,
            search,
            unregister,
            toggleFav,
            goToFavs
        } = this

        return <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
                <button className="button button-medium button--dark" onClick={goToProfile}>Profile</button>
                <button className="button button-medium button--dark" onClick={goToFavs}>Favs</button>
                <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
            </div>

            {
                view === 'search' && <>
                    <Search onSearch={search} query={query} />

                    {!vehicle && <Results items={vehicles} onItem={goToItem} onToggleFav={toggleFav} />}

                    {vehicle && <Detail item={vehicle} onBack={clearVehicle} onToggleFav={toggleFav} />}
                </>
            }

            {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}

            {view === 'favs' && <Favs items={favs} onBack={goToSearch} />}
        </div>
    }
}

export default Home
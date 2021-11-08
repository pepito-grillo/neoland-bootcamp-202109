import { useState } from 'react'
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

function Home({ name, onFlowStart, onFlowEnd, onSignOut, onFeedback }) {
    logger.debug('Home -> render')

    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState(null)
    const [view, setView] = useState('search')
    const [favs, setFavs] = useState([])
    const [query, setQuery] = useState(null)

    const search = query => {
        onFlowStart()

        setVehicle(null)
        setVehicles([])
        setQuery(query)

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setVehicles(vehicles)

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const goToItem = vehicleId => {
        onFlowStart()

        try {
            retrieveVehicle(sessionStorage.token, vehicleId, (error, vehicle) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setVehicle(vehicle)
                setView('search')

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const clearVehicle = () => setVehicle(null)

    const goToProfile = () => setView('profile')

    const goToSearch = () => setView('search')

    const updatePassword = (oldPassword, password) => {
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

    const unregister = password => {
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

    const toggleFav = id => {
        onFlowStart()

        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                if (vehicle)
                    setVehicle({ ...vehicle, isFav: !vehicle.isFav })

                if (vehicles.length)
                    setVehicles(vehicles.map(vehicle => {
                        if (vehicle.id === id) {
                            return { ...vehicle, isFav: !vehicle.isFav }
                        }

                        return vehicle
                    }))

                if (favs.length)
                    setFavs(favs.filter(vehicle => vehicle.id !== id))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const goToFavs = () => {
        onFlowStart()

        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                setView('favs')
                setFavs(favs)
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

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

        {view === 'favs' && <Favs items={favs} onBack={goToSearch} onItem={goToItem} onToggleFav={toggleFav} />}
    </div>
}

export default Home
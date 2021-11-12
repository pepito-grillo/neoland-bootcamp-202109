import { useState } from 'react'
import logger from '../logger'
import {
    updateUserPassword,
    unregisterUser,
    addVehicleToCart,
    retrieveVehiclesCart,
    removeVehicleFromCart
} from '../logic'
import './Home.css'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Profile from './Profile'
import Favs from './Favs'
import Cart from './Cart'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useQueryParams } from '../hooks'

function Home({ name, onFlowStart, onFlowEnd, onSignOut, onFeedback }) {
    logger.debug('Home -> render')

    const [view, setView] = useState('search')
    const [favs, setFavs] = useState([])

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))
    const [cart, setCart] = useState([])
    const navigate = useNavigate()

    const search = query => {
        setQuery(query)

        navigate(`/search?q=${query}`)
    }

    const goToItem = id => navigate(`/vehicles/${id}`)

    const goToProfile = () => setView('profile')

    const goToSearch = () => {
        setView('search')

        search(query)
    }

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

    const goToFavs = () => {
        setView('favs')

        navigate('/favs')
    }

    const addToCart = id => {
        onFlowStart()

        try {
            addVehicleToCart(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setCart(cart.map(vehicle => {
                    if (vehicle.id === id)
                        return { ...vehicle, qty: vehicle.qty + 1 }

                    return vehicle
                }))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const goToCart = () => {
        onFlowStart()

        try {
            retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setCart(vehicles)

                setView('cart')

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const removeFromCart = id => {
        onFlowStart()

        try {
            removeVehicleFromCart(sessionStorage.token, id, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                setCart(cart.reduce((accum, vehicle) => {
                    if (vehicle.id === id) {
                        if (vehicle.qty < 2)
                            return accum

                        vehicle = { ...vehicle, qty: vehicle.qty - 1 }
                    }

                    accum.push(vehicle)

                    return accum
                }, []))

                onFlowEnd()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    return <div className="container container--gapped container--vertical">
        <div className="container">
            <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
            <button className={`button button-medium ${view === 'profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>
            <button className={`button button-medium ${view === 'favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
            <button className={`button button-medium ${view === 'cart' && 'button--dark'}`} onClick={goToCart}>Cart</button>
            <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
        </div>

        {
            view === 'search' && <>
                <Routes>
                    <Route path="/" element={<Search onSearch={search} query={query} />}>
                        <Route path="search" element={
                            <Results onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />
                        } />
                        <Route path="vehicles/:id" element={
                            <Detail onBack={goToSearch} onAddToCart={addToCart} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />
                        } />
                    </Route>
                </Routes>
            </>
        }


        {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}

        {
            view === 'favs' && <Routes>
                <Route path="/favs" element={<Favs items={favs} onBack={goToSearch} onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />} />
            </Routes>
        }

        {view === 'cart' && <Cart items={cart} onBack={goToSearch} onItem={goToItem} onAdd={addToCart} onRemove={removeFromCart} />}
    </div>
}

export default Home
import { useState } from 'react'
import logger from '../logger'
import './Home.css'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Profile from './Profile'
import Favs from './Favs'
import Cart from './Cart'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useQueryParams } from '../hooks'

function Home({ name, onFlowStart, onFlowEnd, onSignOut, onFeedback }) {
    logger.debug('Home -> render')

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))

    const navigate = useNavigate()

    const location = useLocation()

    const search = query => {
        setQuery(query)

        navigate(`/search?q=${query}`)
    }

    const goToItem = id => navigate(`/vehicles/${id}`)

    const goToProfile = () => navigate('/profile')

    const goToSearch = () => search(query)

    const goToFavs = () => navigate('/favs')

    const goToCart = () => navigate('/cart')

    return <div className="container container--gapped container--vertical">
        <div className="container">
            <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
            <button className={`button button-medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>
            <button className={`button button-medium ${location.pathname === '/favs' && 'button--dark'}`} onClick={goToFavs}>Favs</button>
            <button className={`button button-medium ${location.pathname === '/cart' && 'button--dark'}`} onClick={goToCart}>Cart</button>
            <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
        </div>

        <Routes>
            <Route path="/" element={<Search onSearch={search} query={query} />}>
                <Route path="search" element={
                    <Results onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />
                } />
                <Route path="vehicles/:id" element={
                    <Detail onBack={goToSearch} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />
                } />
            </Route>

            <Route path="/profile" element={<Profile onBack={goToSearch} onSignOut={onSignOut} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />} />
            <Route path="/favs" element={<Favs onBack={goToSearch} onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />} />
            <Route path="/cart" element={<Cart onBack={goToSearch} onItem={goToItem} onFlowStart={onFlowStart} onFlowEnd={onFlowEnd} onFeedback={onFeedback} />} />
        </Routes>
    </div>
}

export default Home
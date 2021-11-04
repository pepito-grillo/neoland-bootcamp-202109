// const Component = React.Component
const { Component } = React

class Home extends Component {
    constructor() {
        logger.info('Home -> constructor')

        super()

        this.state = {
            vehicles: [],
            vehicle: null,
            view: 'search'
        }
    }

    search = query => {
        // const onFlowStart = this.props.onFlowStart
        // const onFlowEnd = this.props.onFlowEnd
        const { props: { onFlowStart, onFlowEnd } } = this

        onFlowStart()

        this.setState({ vehicle: null, vehicles: [] })

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    alert(error.message)

                    onFlowEnd()

                    return
                }

                this.setState({ vehicles })

                onFlowEnd()
            })
        } catch (error) {
            alert(error.message)

            onFlowEnd()
        }
    }

    goToItem = vehicleId => {
        const { props: { onFlowStart, onFlowEnd } } = this

        onFlowStart()

        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
                if (error) {
                    alert(error.message)

                    onFlowEnd()

                    return
                }

                this.setState({ vehicle })

                onFlowEnd()
            })
        } catch (error) {
            alert(error.message)

            onFlowEnd()
        }
    }

    clearVehicle = () => this.setState({ vehicle: null })

    goToProfile = () => this.setState({ view: 'profile' })

    goToSearch = () => this.setState({ view: 'search' })

    updatePassword = (oldPassword, password) => {
        const { props: { onFlowStart, onFlowEnd } } = this

        onFlowStart()

        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    alert(error.message)

                    onFlowEnd()

                    return
                }

                onFlowEnd()
            })
        } catch (error) {
            alert(error.message)

            onFlowEnd()
        }
    }

    unregister = password => {
        const { props: { onFlowStart, onFlowEnd, onSignOut } } = this

        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    alert(error.message)

                    onFlowEnd()

                    return
                }

                onFlowEnd()

                onSignOut()
            })
        } catch (error) {
            alert(error.message)

            onFlowEnd()
        }
    }

    render() {
        logger.info('Home -> render')

        const { state: { view, vehicle, vehicles }, props: { name, onSignOut }, goToProfile, goToItem, clearVehicle, updatePassword, goToSearch, search, unregister } = this

        return <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
                <button className="button button-medium button--dark" onClick={goToProfile}>Profile</button>
                <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
            </div>

            {
                view === 'search' && <>
                    <Search onSearch={search} />

                    {!vehicle && <Results items={vehicles} onItem={goToItem} />}

                    {vehicle && <Detail item={vehicle} onBack={clearVehicle} />}
                </>
            }

            {view === 'profile' && <Profile onBack={goToSearch} onPasswordUpdate={updatePassword} onUnregister={unregister} />}
        </div>
    }
}
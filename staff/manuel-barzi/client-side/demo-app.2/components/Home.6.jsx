class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            vehicles: [],
            vehicle: null,
            view: 'search'
        }
    }

    search = query => {
        this.props.onFlowStart()

        this.setState({ vehicle: null, vehicles: [] })

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    alert(error.message)

                    this.props.onFlowEnd()

                    return
                }

                this.setState({ vehicles })

                this.props.onFlowEnd()
            })
        } catch (error) {
            alert(error.message)

            this.props.onFlowEnd()
        }
    }

    goToItem = vehicleId => {
        this.props.onFlowStart()

        try {
            retrieveVehicle(vehicleId, (error, vehicle) => {
                if (error) {
                    alert(error.message)

                    this.props.onFlowEnd()

                    return
                }

                this.setState({ vehicle })

                this.props.onFlowEnd()
            })
        } catch (error) {
            alert(error.message)

            this.props.onFlowEnd()
        }
    }

    clearVehicle = () => this.setState({ vehicle: null })

    goToProfile = () => this.setState({ view: 'profile' })

    goToSearch = () => this.setState({ view: 'search' })

    updatePassword = (oldPassword, password) => {
        this.props.onFlowStart()

        try {
            // updateUserPassword(sessionStorage.token, oldPassword, password, function (error) {
            //     if (error) {
            //         alert(error.message)

            //         this.props.onFlowEnd()

            //         return
            //     }

            //     this.props.onFlowEnd()
            // }.bind(this))

            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    alert(error.message)

                    this.props.onFlowEnd()

                    return
                }

                this.props.onFlowEnd()
            })
        } catch (error) {
            alert(error.message)

            this.props.onFlowEnd()
        }
    }

    render() {
        logger.debug('Home -> render')

        return <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{this.props.name ? this.props.name : 'World'}</span>!</p>
                <button className="button button-medium button--dark" onClick={this.goToProfile}>Profile</button>
                <button className="button button-medium button" onClick={this.props.onSignOut}>Sign out</button>
            </div>

            {
                this.state.view === 'search' && <>
                    <Search onSearch={this.search} />

                    {!this.state.vehicle && <Results items={this.state.vehicles} onItem={this.goToItem} />}

                    {this.state.vehicle && <Detail item={this.state.vehicle} onBack={this.clearVehicle} />}
                </>
            }


            {this.state.view === 'profile' && <Profile onBack={this.goToSearch} onPasswordUpdate={this.updatePassword} />}
        </div>
    }
}
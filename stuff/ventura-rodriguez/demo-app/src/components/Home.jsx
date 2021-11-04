import React from "react"
import Search from "./Search"
import Results from "./Results"
import { searchVehicles } from "../logic"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            view: "home",
            vehicles: []
        }
    }

    showResults = query => {
        try {
            searchVehicles(query, (err, vehicles) => {
                if(err) {
                    alert(err.message)
                    // return
                }
                else {
                    this.setState({
                        view: "results",
                        vehicles
                        // vehicles: vehicles
                    })
                }
            })
        } catch (err) {
            alert(err.message)
        }
    }

    render() {
        return <>
        {/* Esto de aquí es estático independiente de la view */}
            <div className="home container container--gapped container--vertical">
                <div className="container">
                    <p>Hello, <span className="name">{this.props.name ? this.props.name : 'World'}</span>!</p>
                    <button className="button button-medium button--dark">Profile</button>
                    <button className="button button-medium button" onClick={() => this.props.toLanding()}>Sign out</button>
                </div>
            </div>
            <Search goToResults= {this.showResults}/>
        {/* --------------------------------------- */}
        {/* Lo que viene ahora depende de view */}

        {this.state.view === "results" && <Results items={this.state.vehicles}/>}
        </>
    }

}

export default Home
const title = <h1>hola mundo</h1>

function Hello(props) {
    return <h1>hello {props.name}!</h1>
}

function Panel() {
    return <div className="panel">
        <Hello name="Anna" />
    </div>
}

/*
let count = 0

function Counter() { // dumb/presentational component
    return <button onClick={() => {
        count++
        console.log(count)
    }}>count {count}</button> // WARN does not update the view (count always 0!)
}*/

class Counter extends React.Component { // smart/container component
    constructor() {
        super()
        this.state = { count: 0 }
    }

    render() {
        return <button onClick={() => {
            //this.state.count++

            const count = this.state.count + 1
            
            //this.setState({ count: count })
            this.setState({ count })

            console.log(count)
        }}>count {this.state.count}</button>
    }
}

// function App() {
//     return <div>
//         <Panel />
//         <Counter />
//     </div>
// }

function App() {
    return <>
        <Panel />
        <Counter />
    </>
}

ReactDOM.render(<App />, document.getElementById('root'))
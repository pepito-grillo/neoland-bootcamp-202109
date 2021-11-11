const title = <h1>hola mundo</h1>

function Hello(props) {
    return <h1>hello {props.name}!</h1>
}

function Panel() {
    return <div className="panel">
        <Hello name="Anna"/>
    </div>
}

//ReactDOM.render([Panel()], document.getElementById('root'))
ReactDOM.render([<Panel/>], document.getElementById('root'))
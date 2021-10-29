const title = <h1>hola mundo</h1>

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const elems = days.map(day => <li>{day}</li>)

const list = <ul>{elems}</ul>

function Hello(props) {
    return <h1>hello {props.name}!</h1>
}

function Panel() {
    return <div className="panel">
        <Hello name="Anna"/>
    </div>
}

ReactDOM.render([title, list, Hello({ name: 'Peter' }), Panel()], document.getElementById('root'))
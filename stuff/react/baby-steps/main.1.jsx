const title = <h1>hola mundo</h1>

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const elems = days.map(day => <li>{day}</li>)

const list = <ul>{elems}</ul>

ReactDOM.render([title, list], document.getElementById('root'))
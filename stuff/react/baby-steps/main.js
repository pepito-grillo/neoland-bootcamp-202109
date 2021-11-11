const title = React.createElement('h1', null, 'hola mundo')

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

// const elems = days.map(function(day) {
//     return React.createElement('li', null, day)
// })

const elems = days.map(day => React.createElement('li', null, day))

const list = React.createElement('ul', null, elems)

ReactDOM.render([title, list], document.getElementById('root'))
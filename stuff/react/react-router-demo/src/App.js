import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams, Link, Outlet } from 'react-router-dom'
import retrieveVehicle from './logic/retrieve-vehicle'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <Link to="/vehicles/FYF54">Go to KICK KART</Link>
        <Link to="/vehicles/FYG74">Go to ’65 MUSTANG 2+2 FASTBACK</Link>

        <Routes>
          <Route path="/hello" element={<h1>Hello!</h1>} />
          <Route path="/hola" element={<h1>Hola!</h1>} />
          <Route path="/salute/:name" element={<Salute />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/vehicles/:id" element={<Vehicle />} />
        </Routes> */}

        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="one" element={<One />} />
            <Route path="two" element={<Two />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

function Salute() {
  const params = useParams()

  return <h1>Hello, {params.name}!</h1>
}

function Product() {
  const params = useParams()

  return <h1>Product #{params.id}</h1>
}

function Vehicle() {
  const { id } = useParams()
  const [vehicle, setVehicle] = useState()

  useEffect(() => {
    try {
      retrieveVehicle(id, (error, vehicle) => {
        if (error) return alert(error.message)

        setVehicle(vehicle)
      })
    } catch (error) {
      alert(error.message)
    }
  }, [id])

  return <div>
    {vehicle && <>
      <h1>{vehicle.name}</h1>
      <img src={vehicle.image} />
    </>}
  </div>
}

function Root() {
  return <>
    <h1>Root</h1>
    <Outlet />
  </>
}

function One() {
  return <h2>One</h2>
}

function Two() {
  return <h2>Two</h2>
}

export default App;

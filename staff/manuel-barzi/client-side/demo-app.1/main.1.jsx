function App() {
    return <>
        {sessionStorage.token? <h1>TODO</h1> : <Landing onSignIn={() => console.log('go to sign in')} onSignUp={() => console.log('go to sign up')} />}
    </>
}

ReactDOM.render(<App />, document.getElementById('root'))
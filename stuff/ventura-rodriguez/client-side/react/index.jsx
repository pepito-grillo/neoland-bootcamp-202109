////////////////////////////////////////////////////////
//      Using React without jsx
////////////////////////////////////////////////////////

const hello = <h1 key="hello">Hello world!</h1>

const lorem = () => (
    <p key="Lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum placeat ipsum dignissimos maxime hic rem ab temporibus, obcaecati vel magni eos consequatur ipsam aperiam! Impedit porro ratione neque ut!
    </p>
)

const sayHi = name => <p key="sayHi">Hello {name.toUpperCase()}</p>

const separator = () => (
    <div
        key="separator"
        style={{
            height: "20px",
            width: "100%",
            backgroundColor: "red",
            margin: "20px 0",
            textAlign: "center"
        }}
    >
        Ejemplo React en jsx
    </div>
)

// const separator = () => <div key="separator" style={{ height: "20px", width: "100%", backgroundColor: "red", margin: "20px 0", textAlign: "center"}}>Ejemplo React en jsx</div>


ReactDOM.render([separator(), hello, lorem(), sayHi("Lucatiel")], document.getElementById("App-root-jsx"))
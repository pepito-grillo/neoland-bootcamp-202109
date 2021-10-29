////////////////////////////////////////////////////////
//      Using React without js
////////////////////////////////////////////////////////

const hello = React.createElement("h1", {key: "hello"}, "Hello world!")

// let hello1 = document.createElement("h1")
// hello1.setAttribute("id", "hello1")
// hello1.innerText = "Hello world!"
// document.getElementById("App-root-js").appendChild(hello1)

const lorem = () => React.createElement(
    "p",
    {key: "lorem"},
    `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis accusamus placeat delectus pariatur facilis sed fugit beatae consequatur ad fuga tempora, minima, voluptas voluptate reprehenderit earum velit in ipsum.
    `
)

const sayHi = name => {
    const hi = name.toUpperCase()
    return React.createElement(
        "p",
        {key: "sayHi"},
        `hello ${hi}!`
    )
}

const separator = () => React.createElement(
    "div",
    {
        key: "separator",
        style: {
            height: "20px",
            width: "100%",
            backgroundColor: "red",
            margin: "20px 0",
            textAlign: "center"
        }
    },
    `Ejemplo React en js`
)

// let separator1 = document.createElement("div")
// separator1.innerText = "Ejemplo React en js"
// separator1.setAttribute("id", "separator")
// separator1.style.height = "20px"
// separator1.style.width = "100%"
// separator1.style.backgroundColor = "red"
// separator1.style.margin = "20px 0"
// separator1.style.textAlign = "center"
// document.getElementById("App-root-js").appendChild(separator1)


ReactDOM.render([separator(), hello, lorem(), sayHi("Lucatiel")], document.getElementById("App-root-js"))
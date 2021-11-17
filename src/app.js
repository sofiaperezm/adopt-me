const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Havenese"),
    ])
}


const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt me!")
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
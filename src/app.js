import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Levi",
      animal: "cat",
      breed: "domestic longhair cat",
    }),
    React.createElement(Pet, {
      name: "Kira!!",
      animal: "cat",
      breed: "Domestic short-haired cat",
    }),
    React.createElement(Pet, {
      name: "Flaca",
      animal: "dog",
      breed: "mixed-breed",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

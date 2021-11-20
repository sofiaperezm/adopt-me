import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Levi",
//       animal: "cat",
//       breed: "domestic longhair cat",
//     }),
//     React.createElement(Pet, {
//       name: "Kira!!",
//       animal: "cat",
//       breed: "Domestic short-haired cat",
//     }),
//     React.createElement(Pet, {
//       name: "Flaca",
//       animal: "dog",
//       breed: "mixed-breed",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

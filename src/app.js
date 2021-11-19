import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./searchParams";

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
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

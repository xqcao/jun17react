import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Content from "./components/Content";
import Todos from "./components/Todos";

const routes = [
  { name: "welcome", url: "/", component: Welcome },
  { name: "About Page", url: "/about", component: About },
  { name: "Content", url: "/content", component: Content },
  { name: "todos", url: "/todos", component: Todos },
];
const App = () => {
  return (
    <div className="App">
      <h2>Hello React</h2>

      <ol className="navli">
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "*" + idx}
            path={el.url}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;

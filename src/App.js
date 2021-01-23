import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;

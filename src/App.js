import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error } from "./components/404error/index";
import { Home } from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/error" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

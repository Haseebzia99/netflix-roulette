import {BrowserRouter as Router, Route} from 'react-router-dom';
import { SearchBanner } from "./components/Banners/SearchBanner/index";
import { AddMovie } from "./components/AddMovie/index";
import { error } from "./components/404error";

import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="netflix-header">
        <SearchBanner />
        <AddMovie />
        <Router>
          <Route path="/404error" component={error} />
        </Router>
      </div>
    </div>
  );
}

export default App;

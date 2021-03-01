import { SearchBanner } from "./components/Banners/SearchBanner/index";
import { AddMovie } from "./components/AddMovie/index";
import { Movie } from "./components/Movies/index";

import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="netflix-header">
        <SearchBanner />
        <AddMovie />
        <Movie />
      </div>
    </div>
  );
}

export default App;

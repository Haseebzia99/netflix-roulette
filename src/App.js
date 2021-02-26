import { SearchBanner } from "./components/Banners/SearchBanner/index";
import { AddMovie } from "./components/AddMovie/index";

import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="netflix-header">
        <SearchBanner />
        <AddMovie />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { AddMovie } from "./components/AddMovie";
import { SearchBanner } from "./components/Banners/SearchBanner/index";

function App() {
  return (
    <div className="App">
      <div className="netflix-header">
        {/* <AddMovie /> */}
        <SearchBanner />
      </div>
    </div>
  );
}

export default App;

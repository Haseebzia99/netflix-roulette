import './App.css';
import { AddMovie } from './components/AddMovie';
import logo from './assets/images/netflix-logo.png';
import { SearchBanner } from './components/Banners/SearchBanner/index';

function App() {
  return (
    <div className="App">
      <div className="netflix-header">
        <img src={logo} className="netflix--logo" alt="nt-log"/>
        <AddMovie />
        <SearchBanner />
      </div>
    </div>
  );
}

export default App;

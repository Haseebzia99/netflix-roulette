import './App.css';
import { AddMovie } from './components/AddMovie';
import logo from './assets/images/netflix-logo.png'

function App() {
  return (
    <div className="App">
      <div className="netflix-header">
        <img src={logo} className="netflix--logo"/>
        <AddMovie />
      </div>
    </div>
  );
}

export default App;

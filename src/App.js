import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's <code>time</code> to propel.
        </p>
        <a
          className="App-link"
          href="https://www.drgeo.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start AI Machine
        </a>
      </header>
    </div>
  );
}

export default App;

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
          href="https://propelin.github.io/redesigned-octo-memory/"
          rel="noopener noreferrer"
        >
          Start AI
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>Start editing to see some magic happen!</p>
        
        <div className="counter-section">
          <h2>Counter Example</h2>
          <p>You clicked {count} times</p>
          <button 
            className="counter-button"
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>
          <button 
            className="counter-button reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div className="links">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create React App
          </a>
        </div>
      </header>
    </div>
  );
}

export default App; 
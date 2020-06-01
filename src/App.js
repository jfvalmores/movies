import React, { useEffect } from 'react';
import { Movies } from './api';

const { searchMovies } = Movies();

const App = () => {
  const params = {
    s: 'breaking bad'
  };

  useEffect(() => {
    searchMovies(params);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

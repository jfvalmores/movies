import React, { useState, useEffect } from 'react';
import { Movies } from './api';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import SearchIcon from '@material-ui/icons/Search';

const { searchMovies } = Movies();

const App = () => {
  const defaultParams = {
    s: 'asdqwewqeaszd',
    type: 'movie',
    y: '2019'
  };
  const mediaTypes = [
    { label: 'Movie', data: 'movie' },
    { label: 'Series', data: 'series' },
    { label: 'Episode', data: 'episode' },
  ];

  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    searchMovies(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (id, value) => {
    setParams({
      ...params,
      [id]: value
    });
  }

  return (
    <div className="App">
      <InputField
        id="s"
        label="Search"
        value={params.s}
        onChange={handleChange}
        startIcon={<SearchIcon />}
      />
      <SelectField
        id="type"
        label="Type"
        labelWidth={37}
        value={params.type}
        onChange={handleChange}
        dataList={mediaTypes}
      />
      <InputField
        id="y"
        label="Year"
        maxLen={4}
        value={params.y}
        onChange={handleChange}
      />
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

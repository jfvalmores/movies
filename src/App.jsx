import React, { useState, useEffect, useRef } from 'react';

import { Movies } from './api';

import Toast from './components/Toast';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

const { searchList } = Movies();

const App = () => {
  const defaultParams = {
    s: 'Avengers',
    type: 'movie',
    y: ''
  };
  const mediaTypes = [
    { label: 'Movie', data: 'movie' },
    { label: 'Series', data: 'series' },
    { label: 'Episode', data: 'episode' },
  ];

  const [params, setParams] = useState(defaultParams);
  const [result, setResult] = useState([]);
  const [popup, showPopup] = useState({
    open: false,
    message: ''
  });

  const resultRef = useRef();

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResult = (data) => {
    setResult([]);
    resultRef.current.scroll();
    console.log(data);

    if (data['Response'] === 'False') {
      showPopup({ open: true, message: data['Error'] });
      return;
    }

    if (Number(data['totalResults'])) {
      setResult(data['Search']);
    }
  }

  const getNewParams = (id, value) => {
    return {
      ...params,
      [id]: value,
    }
  }

  const handleChange = (id, value) => {
    setParams(getNewParams(id, value));
  }

  const handleSearchChange = (id, value) => {
    search(getNewParams(id, value));
    handleChange(id, value);
  }

  const search = (altParams = null) => {
    searchList(altParams || params, handleResult);
  }

  return (
    <>
      <SearchBar
        params={params}
        search={search}
        mediaTypes={mediaTypes}
        handleChange={handleChange}
        handleSearchChange={handleSearchChange}
      />
      <MovieList
        result={result}
        resultRef={resultRef}
      />
      <Toast
        popup={popup}
        showPopup={showPopup}
      />
    </>
  );
}

export default App;

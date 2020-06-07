import React, { useState, useEffect, useRef } from 'react';

import { Movies } from './api';

import Toast from './components/Toast';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const { searchList, getDetail } = Movies();

const App = () => {
  const defaultParams = {
    s: 'star wars',
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
  const [detail, setDetail] = useState({
    open: false,
    data: {}
  });

  const resultRef = useRef();

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResult = (data) => {
    setResult([]);
    resultRef.current.scroll();

    if (data['Response'] === 'False' && params['s']) {
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

  const openDetail = (i) => {
    getDetail({ i }, (res) => {
      if (!res) return;

      const data = {
        open: true,
        data: {
          ...res,
          link: `https://www.imdb.com/title/${i}`,
        }
      }

      setDetail(data);
    });
  }

  const closeDetail = () => {
    setDetail({
      ...detail,
      open: false,
    });
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
        openDetail={openDetail}
      />
      <MovieDetail
        open={detail.open}
        data={detail.data}
        closeDetail={closeDetail}
      />
      <Toast
        popup={popup}
        showPopup={showPopup}
      />
    </>
  );
}

export default App;

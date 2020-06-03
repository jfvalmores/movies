import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import { Movies } from './api';
import MovieCard from './components/MovieCard';
import InputField from './components/InputField';
import SelectField from './components/SelectField';

const styles = makeStyles({
  form: {
    margin: 5
  },
  search: {
    top: 0,
    padding: 10,
    zIndex: 100,
    position: 'sticky',
    background: 'white',
  }
});

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

  const classes = styles();

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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.search}
      >
        <div className={classes.form}>
          <InputField
            id="s"
            label="Title"
            value={params.s}
            onEnter={search}
            onChange={handleChange}
            placeholder="Search..."
            startIcon={<SearchIcon />}
          />
        </div>
        <div className={classes.form}>
          <SelectField
            id="type"
            label="Type"
            labelWidth={37}
            value={params.type}
            dataList={mediaTypes}
            onChange={handleSearchChange}
          />
        </div>
        <div className={classes.form}>
          <InputField
            id="y"
            label="Year"
            maxLen={4}
            value={params.y}
            onEnter={search}
            onChange={handleChange}
          />
        </div>
      </Grid>
      <Grid
        container
        ref={resultRef}
        direction="row"
        justify="center"
      >
        {result.map((movie, index) => (
          <MovieCard
            key={index}
            year={movie['Year']}
            title={movie['Title']}
            poster={movie['Poster']}
            link={`https://www.imdb.com/title/${movie['imdbID']}`}
          />
        ))}
      </Grid>
      <Snackbar
        open={popup.open}
        message={popup.message}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => showPopup({ open: false, message: '' })}
      />
    </>
  );
}

export default App;

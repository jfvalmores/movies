import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import { Movies } from './api';
import InputField from './components/InputField';
import SelectField from './components/SelectField';

const styles = makeStyles({
  form: {
    margin: 10
  }
});

const { searchMovies } = Movies();

const App = () => {
  const defaultParams = {
    s: 'Star Wars',
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

  const classes = styles();

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResult = (data) => {
    if (data['Response'] === 'False') {
      alert(data['Error']);
      return;
    }
    console.log(data);

    setResult([]);
    if (Number(data['totalResults'])) {
      setResult(data['Search']);
    }
  }

  const handleChange = (id, value) => {
    setParams({
      ...params,
      [id]: value
    });
  }

  const search = () => {
    searchMovies(params, handleResult);
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <div className={classes.form}>
          <InputField
            id="s"
            label="Search"
            value={params.s}
            onEnter={search}
            onChange={handleChange}
            startIcon={<SearchIcon />}
          />
        </div>
        <div className={classes.form}>
          <SelectField
            id="type"
            label="Type"
            labelWidth={37}
            value={params.type}
            onChange={handleChange}
            dataList={mediaTypes}
          />
        </div>
        <div className={classes.form}>
          <InputField
            id="y"
            label="Year"
            maxLen={4}
            value={params.y}
            onChange={handleChange}
          />
        </div>
      </Grid>
      <div>
        {result.map((movie, index) => (
          <div key={index}>
            <div>{movie['Title']}</div>
            <div>{movie['Year']}</div>
            <div><a href={`https://www.imdb.com/title/${movie['imdbID']}`} target="_blank" rel="noopener noreferrer">iMDb Link</a></div>
            <img src={movie['Poster']} alt="Movie Poster" height={300} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

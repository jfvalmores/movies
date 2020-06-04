import React from 'react';
import Grid from '@material-ui/core/Grid';

import MovieCard from './MovieCard';

const MovieList = (props) => {
  const {
    result,
    resultRef,
    openDetail,
  } = props;

  return (
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
          openDetail={openDetail}
          poster={movie['Poster']}
          imdbID={movie['imdbID']}
        />
      ))}
    </Grid>
  );
}

export default MovieList;
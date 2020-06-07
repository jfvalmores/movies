import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = makeStyles({
  year: {
    fontSize: 16,
    color: '#888',
    paddingLeft: 10,
  },
  subtitles: {
    '& > span': {
      fontSize: 12,
      color: '#888',
    }
  },
  spacer: {
    width: '100%',
  },
  flexContainer: {
    display: 'flex',
  },
  titleContainer: {
    width: '100%',
  },
  ratingContainer: {
    textAlign: 'right',
    width: '25%',
    '& > span': {
      fontSize: 12,
      color: '#888',
    }
  },
  rating: {
    fontSize: '1.25rem',
  },
  detail: {
    margin: '0 12px 12px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  poster: {
    maxWidth: 500,
    maxHeight: 500
  },
  chip: {
    margin: 2
  }
});

const MovieDetail = (props) => {
  const {
    open,
    data,
    closeDetail,
  } = props;

  const classes = styles();

  const renderAttribute = (attr) => {
    return (
      <div>
        <strong>{attr}:</strong>
        {data[attr] &&
          <>
            {data[attr]
              .split(',')
              .map((name, idx) => <Chip className={classes.chip} key={idx} label={name} />)}
          </>
        }
      </div>
    );
  }

  const openIMDb = () => {
    if (!data['link']) return;
    window.open(data['link'], '_blank');
  }

  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="md"
      onClose={closeDetail}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">
        <div className={classes.flexContainer}>
          <div className={classes.titleContainer}>
            <span>{data['Title']}</span>
            <span className={classes.year}>({data['Year']})</span>
          </div>
          <div className={classes.ratingContainer}>
            <span>
              <span className={classes.rating}>{data['imdbRating']}</span> / 10 {'  |  '}
            </span>
            <span>{data['imdbVotes']}</span>
          </div>
        </div>
        <div className={classes.subtitles}>
          <span>{data['Rated']}{'  |  '}</span>
          <span>{data['Runtime']}{'  |  '}</span>
          <span>{data['Genre']}{'  |  '}</span>
          <span>{data['Released']}</span>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className={classes.flexContainer}>
          <img className={classes.poster} src={data['Poster']} alt="Poster" />
          <div className={classes.detail}>
            <DialogContentText>
              {data['Plot']}
            </DialogContentText>
            <div>
              {renderAttribute('Director')}
              {renderAttribute('Writer')}
              {renderAttribute('Actors')}
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={openIMDb} color="primary">
          IMDb
        </Button>
        <Button onClick={closeDetail} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MovieDetail;
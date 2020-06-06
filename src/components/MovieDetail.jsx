import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  }
});

const MovieDetail = (props) => {
  const {
    open,
    data,
    closeDetail,
  } = props;

  const classes = styles();

  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="md"
      onClose={closeDetail}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">
        <div>
          {data['Title']}
          <span className={classes.year}>({data['Year']})</span>
        </div>
        <div className={classes.subtitles}>
          <span>{data['Rated']}{'  |  '}</span>
          <span>{data['Runtime']}{'  |  '}</span>
          <span>{data['Genre']}{'  |  '}</span>
          <span>{data['Released']}</span>
        </div>
      </DialogTitle>
      <DialogContent>
        <div>
          <img src={data['Poster']} alt="Poster" />
          <DialogContentText>
            {data['Plot']}
          </DialogContentText>
        </div>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDetail} color="primary">
          Close
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MovieDetail;
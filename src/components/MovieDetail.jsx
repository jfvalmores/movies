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
        {data['Title']}
        <span className={classes.year}>({data['Year']})</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {data['Plot']}
        </DialogContentText>
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
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Toast = (props) => {
  const {
    popup,
    showPopup,
  } = props;

  const autoHideDuration = 5000;
  const anchorOrigin = { vertical: 'top', horizontal: 'right' };

  const onClose = () => {
    showPopup({ open: false, message: '' });
  }

  return (
    <Snackbar
      open={popup.open}
      onClose={onClose}
      message={popup.message}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
    />
  );
}

export default Toast;
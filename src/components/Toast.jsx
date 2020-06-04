import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Toast = (props) => {
  const {
    popup,
    showPopup,
  } = props;

  return (
    <Snackbar
      open={popup.open}
      message={popup.message}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => showPopup({ open: false, message: '' })}
    />
  );
}

export default Toast;
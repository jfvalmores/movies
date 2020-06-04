import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import theme from './settings/theme';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

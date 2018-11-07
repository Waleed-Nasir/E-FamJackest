import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#282c34',
            main: '#282c34',
            dark: '#4a4a4a',
        },
        secondary: {
            main: '#ff9800',
        },
        error: {
            main: '#ff0000',
        },
    },
    typography: {
        fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
        color: '#4A4A4A',
    },
});
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

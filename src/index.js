import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theMovieDb from "themoviedb-javascript-library";


theMovieDb.common.api_key = process.env.REACT_APP_API_KEY;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

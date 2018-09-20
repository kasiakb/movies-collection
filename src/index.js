import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theMovieDb from "themoviedb-javascript-library";


theMovieDb.common.api_key = process.env.REACT_APP_API_KEY;
const store = configureStore();

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();

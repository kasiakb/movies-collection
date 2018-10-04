import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from '../src/components/Style/AppContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();

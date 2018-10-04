import {createStore, applyMiddleware} from 'redux';
import rootreducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootreducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
}

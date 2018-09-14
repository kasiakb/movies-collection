import {createStore, applyMiddleware} from 'redux';
import rootreducer from '../reducers/index';

export default function configureStore(initialState) {
  return createStore(
    rootreducer,
    initialState,
  );
}
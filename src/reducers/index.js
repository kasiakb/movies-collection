import {combineReducers} from 'redux';
import movies from './moviesReduces';

const rootreducer = combineReducers({
  movies,
});

export default rootreducer;

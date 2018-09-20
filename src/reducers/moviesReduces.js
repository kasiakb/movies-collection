import * as types from '../actions/actionTypes'
import initialState from './initialState';

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_MOVIES:
      return {
        ...state,
        isLoading: true,
      }
    case types.RECEIVE_MOVIES:
      return {
        ...state,
        isLoading: false,
        movies: [
          ...state.movies,
          ...action.movies
        ],
        page: action.pageNumber,
      }
    case types.FAILURE_MOVIES:
      return {
        ...state,
        isError: true,
        isLoading: false,
      }

    default:
      return state;
  }
}
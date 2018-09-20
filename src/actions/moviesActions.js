import * as types from '../actions/actionTypes';
import theMovieDb from 'themoviedb-javascript-library'

export const requestMovies = pageNumber => {
  return {
    type: types.REQUEST_MOVIES,
    pageNumber
  }
}

export const receiveMovies = (pageNumber, movies) => {
  return {
    type: types.RECEIVE_MOVIES,
    pageNumber,
    movies,
  }
}

export const failureMovies = error => {
  return {
    type: types.FAILURE_MOVIES,
    error,
  }
}

export function loadMovies(page){
  return function (dispatch, getState) {
    let nextPage = page + 1
    dispatch(requestMovies(nextPage))
    return theMovieDb.discover.getMovies({page: nextPage},
      function(data) {
        data = JSON.parse(data)
        dispatch(receiveMovies(data.page, data.results))
      },
      function(error) {
        dispatch(failureMovies(error))
      }
    )
  } 
}

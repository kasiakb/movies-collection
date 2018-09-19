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

const pageNumber = state => {
  return [...state.movies.page][0] += 1
}

export function loadMovies(){
  return function (dispatch, getState) {
    const currentPage = pageNumber(getState())
    dispatch(requestMovies(currentPage)) 
    return theMovieDb.discover.getMovies({"page": {currentPage}},
      function(data) {
        data = JSON.parse(data)
        dispatch(receiveMovies(data.page, data.results))
        console.log('page', data.page, 'movies', data.results)
      },
      function(error) {
        dispatch(failureMovies(error))
        console.log(error)
      }
    )
  } 
}

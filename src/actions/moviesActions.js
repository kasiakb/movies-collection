import * as types from '../actions/actionTypes';
const api_key = process.env.REACT_APP_API_KEY;

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
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${nextPage}`, {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveMovies(json.page, json.results));
    })
    .catch(error => dispatch(dispatch(failureMovies(error))));
  } 
}
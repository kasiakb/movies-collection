import React from 'react';
import ListItem from './ListItem';

const List = ({movies}) => {
  return movies.map(movie =>
    <ListItem
      key={movie.id}
      title={movie.title}
      overview={movie.overview}
      poster={movie.poster_path}
      rating={movie.vote_average}
      date={movie.release_date}
    />
  )
}

export default List
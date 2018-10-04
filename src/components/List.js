import React from 'react';
import ListItem from './ListItem';

const List = ({movies}) => {

  return movies.map(movie =>
    <ListItem
      key={movie.id}
      {...movie}
    />
  )
}

export default List

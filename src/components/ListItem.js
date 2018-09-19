import React from 'react';

const ListItem = ({title, overview, poster, rating, date}) => {
  return (
    <div className="item movie card">
      <div className="image_content">
      </div>
      <div className="movie info">
        <div className="wrapper">
          {title}
          {rating}
          {date}
        </div>
        <div className="overview">
          {overview}
        </div>
      </div>
  </div>
  )
}

export default ListItem
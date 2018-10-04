import React from 'react';
import {Container,
        ImageContainer,
        ImagePosterSmall,
        ImagePoster,
        ImageBackdrop,
        InfoContainer,
        MoreInfo,
        OverviewnInfo
      } from '../components/Style/MovieCard';

const shortOverwiew = overview => {
  const charactersNunber = 215;
  const shorterString=overview.replace(/^(.{215}[^\s]*).*/, "$1")

  return (
    overview.length > charactersNunber ?
    shorterString.slice(-1) !== "," ?  shorterString+"..." : shorterString.replace(/.$/,"...")
    : overview
  )
}

const ListItem = ({...movie}) => {
  return (
    <Container>
      <ImageContainer>
        <ImagePosterSmall alt={movie.title} src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path}/>
        <ImagePoster alt={movie.title} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.poster_path}/>
        <ImageBackdrop alt={movie.title} src={"https://image.tmdb.org/t/p/w500_and_h282_bestv2" + movie.backdrop_path}/>
      </ImageContainer>
      <InfoContainer>
          {movie.title} <br />
          Rating: {movie.vote_average} <br />
          {movie.release_date} <br />
        <OverviewnInfo>
          {shortOverwiew(movie.overview)}
        </OverviewnInfo>
        <MoreInfo/>
      </InfoContainer>
  </Container>
  )
}

export default ListItem

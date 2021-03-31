import React from 'react';

var Poster = ({ posterUrl }) => {
  if (posterUrl === '') {
    return (
      <img className='placeholder-poster' src='../img/oscar.jpg'></img>
    )
  } else {
    return (
      <img className='image-poster' src={posterUrl}></img>
    )
  }
};

export default Poster;
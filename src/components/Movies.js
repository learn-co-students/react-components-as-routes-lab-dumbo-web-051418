import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {
        movies.map(movie => {
          return (
            <div>
              Title: {movie.title}<br/>
              Time: {movie.time}<br/>
              Genres: {movie.genres.map(genre => genre)}<br/>
              Metascore: {movie.metascore ? movie.metascore : null}<br/>
            </div>
          )
        })
      }
    </div>
  );
};

export default Movies;

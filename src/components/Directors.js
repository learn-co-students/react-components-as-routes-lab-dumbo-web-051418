import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map(director => {
          return (
            <div className="Director">
              {director.name}<br/>
              {director.movies.map((director) => (director))}
            </div>
            )
          }
        )
      }
    </div>
  );
}

export default Directors

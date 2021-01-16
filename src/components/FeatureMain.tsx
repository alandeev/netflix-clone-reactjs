import React from 'react'; //disable-eslint-line
import { IMovie } from '../interfaces/movie';

import './FeatureMain.css';

interface FeatureMainDTO {
  movie: IMovie
}

export function FeatureMain({ movie }: FeatureMainDTO){
  return (
    <section className="feature-main" style={{ 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
    }}>
      <div className="vertical-grandient">
        <div className="horizontal-grandient">
          <h1>{ movie.title }</h1>
        </div>
      </div>
    </section>
  )
}
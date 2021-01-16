import React from 'react'; //disable-eslint-line
import { IMovieExtense } from '../interfaces/movie';

import './FeatureMain.css';
import { Header } from './Header';

interface FeatureMainDTO {
  movie: IMovieExtense
}

export function FeatureMain({ movie }: FeatureMainDTO){
  return (
    <section className="feature-main" style={{ 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
    }}>
      <div className="vertical-grandient">
        <Header />
        <div className="horizontal-grandient">
          <div className="movie">
            <h1 className="movie-title">{ movie.title }</h1>
            <div className="movie-details">
              <p className="points">{movie.vote_average}</p>
              <p className="create-date">{movie.release_date}</p>
              <p className="count-temp">4 temporadas</p>
            </div>
            <div className="movie-description">
              <p>{movie.overview}</p>
            </div>
            <div className="movie-controls">
              <button>Assistir</button>
              <button>Minha Lista</button>
            </div>
            <div className="movie-gerens">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
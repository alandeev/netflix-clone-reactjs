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
            <h1 className="movie-title">{ movie.name }</h1>
            <div className="movie-details">
              <p className="points">{movie.vote_average}</p>
              <p className="create-date">{movie.first_air_date.slice(0, 4)}</p>
              <p className="count-temp">{ movie.seasons.length > 1 ? `${movie.seasons.length+1} temporadas` : "1 temporada"  }</p>
            </div>
            <div className="movie-description">
              <p>{movie.overview}</p>
            </div>
            <div className="movie-controls">
              <button className="show">Assistir</button>
              <button className="list">Minha Lista</button>
            </div>
            <div className="movie-gerens">
                {movie.genres.length > 0 && movie.genres.map((genre, count) => (
                  <p>{genre.name}{movie.genres.length > count+1 ? ',' : ''}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
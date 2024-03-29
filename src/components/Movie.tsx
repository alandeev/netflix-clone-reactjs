import { IMovie } from '../interfaces/movie';

import './Movie.css'

interface MovieDTO {
    movie: IMovie,
    className: string
}

export function Movie({ movie, className }: MovieDTO): JSX.Element {
    return (
        <div className={className}>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            <p>{movie.original_title || movie.name}</p>
        </div>
    )
}
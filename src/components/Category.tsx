import Raect from 'react';
import { categoryResponse } from '../services/tmdbService';

interface categoryDTO {
    movie: categoryResponse;
}

export function Category({ movie }: categoryDTO) {
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <ul>
                {movie.items.map(item => {
                    return (<a>{item.title}</a>)
                })}
            </ul>
        </div>
    )
}
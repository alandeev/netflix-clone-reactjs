import Raect from 'react'; //eslint-disable-line
import { categoryResponse } from '../services/tmdbService';
import { Movie } from './Movie';

import './Category.css'

interface categoryDTO {
    category: categoryResponse;
}

export function Category({ category }: categoryDTO) {
    return (
        <div className="category">
            <h2 className="category--title">{category.title}</h2>
            <div className="category--list">
                <div className="category--items">
                    {category.items.map(item => (
                    <Movie className="category--item" movie={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { movies } from '../../core/mocks/Data';
import { Movie } from '../Movies';

export const Movieslist = () => {
    return (
        <div>
            {movies.map((moviesDetail) => {
                return (
                    <div>
                        <Movie moviesDetail={moviesDetail} /> 
                    </div>
                );
            })}
        </div>
    );
};


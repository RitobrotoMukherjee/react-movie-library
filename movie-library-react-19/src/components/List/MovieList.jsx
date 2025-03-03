import React from 'react'

const MovieList = ({ movieList }) => {
    return (
        <div>
            <ul className='grid grid-cols-3 gap-8'>
                {movieList.map((movie) => (
                    <li key={movie.id} className='text-white'>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList

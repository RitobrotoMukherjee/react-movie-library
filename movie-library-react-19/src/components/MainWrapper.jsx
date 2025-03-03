import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import Search from './Search';
import Error from './Error';
import { FETCH_MOVIES } from '../data-access/fetch-data';
import Loading from './Loading';
import MovieList from './List/MovieList';

const MainWrapper = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        FETCH_MOVIES().then((data) => {
            setMovies(data.results || []);
        }).catch((e) => {
            setErrorMessage(e.toString());
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div className='wrapper'>
            <Header />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {isLoading && <Loading />}
            {!isLoading && 
                <>
                    <div className="all-movies">
                        <h2 className='mt-[40px]'>All Movies</h2>
                        <MovieList movieList={ movies } />
                        { errorMessage && <Error errorMessage={errorMessage} />}
                    </div>
                </>
            }
        </div>
    )
}

export default MainWrapper;

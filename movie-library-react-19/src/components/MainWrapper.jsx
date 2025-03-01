import React, { useState } from 'react'
import Header from './Header/Header';
import Search from './Search';

const MainWrapper = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='wrapper'>
            <Header />

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    )
}

export default MainWrapper;

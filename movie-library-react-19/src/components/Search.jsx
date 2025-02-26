import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <>
            <div className='search'>
                <div>
                    <img src="./search.svg" />

                    <input
                        type="text"
                        placeholder='Search for your favourite movies'
                        onChange={(e) => setSearchTerm(() => e.target.value)}
                    />
                </div>
            </div>
            <div className='text-center'><span className='text-white text-3xl'>{searchTerm}</span></div>
        </>
    )
}

export default Search

import React from 'react';

const SearchBox = ({ searchchange }) => {
    return (
        <div className='pa2'>
            <input type='search' placeholder='search robots' onChange={searchchange}/>
        </div>
    )
}

export default SearchBox;
import React, {useState} from 'react';

function SearchForm(props) {
    const {searchCharacters} = props;
    return (
        <>
        <form>
            <input type='text' name='search' placeholder='Search' onChange={searchCharacters} />
        </form>
        </>
    )
}

export default SearchForm;
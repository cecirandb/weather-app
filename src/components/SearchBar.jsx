import React, { useState } from 'react';
import './styles/SearchBar.css';

function SearchBar({onSearch}) {
    const [city, setCity] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSearch(city);
        }} className='searchBar'>
            <input className='search' type="text" placeholder="City..." onChange={e => handleInputChange(e)}/>
            <input className='submit' type="submit" value="Add"/>
        </form>
    )
}

export default SearchBar;

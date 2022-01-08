import React, { useState } from 'react';

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
        }}>
            <input type="text" placeholder="City..." onChange={e => handleInputChange(e)}/>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default SearchBar;

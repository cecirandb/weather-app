import React from 'react';
import Logo from './img/clima.png';
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
    return (
        <div>
            <img src={Logo} width={'40px'} hight={'40px'} alt="img not found"/>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;

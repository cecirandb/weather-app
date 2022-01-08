import React from 'react';
import './styles/Nav.css';
import Logo from './img/clima.png';
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
    return (
        <div className='nav'>
            <img src={Logo} width={'40px'} hight={'40px'} alt="img not found"/>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;

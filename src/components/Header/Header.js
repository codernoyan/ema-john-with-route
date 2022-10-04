import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
        </div>
    );
};

export default Header;
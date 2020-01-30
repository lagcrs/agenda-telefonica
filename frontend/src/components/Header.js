import React from 'react';

import Logo from '../assets/logo.png';

import './Header.css';

export default function Header() {
    
    return (
        <header>
            <img src={Logo} alt="Logo" /> <br />
            <h1>Agenda Telefônica</h1>

            
        </header>
    );
}

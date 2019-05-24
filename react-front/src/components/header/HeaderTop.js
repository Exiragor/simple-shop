import React from 'react';
import './HeaderTop.css';
import { Logo } from './Logo';
import { Nav } from './Nav';

export const HeaderTop = () => (
    <header className="header d-flex">
        <Logo />
        <Nav />
    </header>
);
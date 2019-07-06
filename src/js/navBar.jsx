import React from 'react';
import { Link } from 'react-router-dom';
import Icons from './icons';

const NavBar = () => {
    return (
        <div>
            <div className="wrapper">
                <nav className="nav">
                    <Link href="#" className="active">
                        Home
                    </Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/about-me">About Me</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <Icons />
        </div>
    );
};

export default NavBar;

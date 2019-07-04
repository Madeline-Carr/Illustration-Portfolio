import React from 'react';
import Icons from './icons';
const NavBar = () => {
    return (
        <div>
            <div className="wrapper">
                <ul>
                    <li>Portfolio</li>
                    <li>About Me</li>
                    <li>Contact</li>
                </ul>
            </div>
            <Icons />
        </div>
    );
};

export default NavBar;

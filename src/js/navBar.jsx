import React from 'react';
import Icons from './icons';
const NavBar = () => {
    return (
        <div>
            <div className="wrapper">
                <ul>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <Icons />
        </div>
    );
};

export default NavBar;

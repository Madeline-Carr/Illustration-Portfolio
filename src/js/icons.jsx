import React from 'react';

import {
    faInstagram,
    faArtstation,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
    return (
        <div>
            <a href="https://www.instagram.com/madelinecarrart/">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a href="https://github.com/Madeline-Carr">
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a href="https://madelinecarr.artstation.com/">
                <FontAwesomeIcon className="icon" icon={faArtstation} />
            </a>
        </div>
    );
};

export default Icons;

import React from 'react';

import {
    faInstagram,
    faTwitter,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
    return (
        <div>
            <a href="#">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a href="#">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a href="#">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
        </div>
    );
};

export default Icons;

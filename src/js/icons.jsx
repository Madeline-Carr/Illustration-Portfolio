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
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faFacebook} />
        </div>
    );
};

export default Icons;

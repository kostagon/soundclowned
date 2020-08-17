import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const HeaderCmp = () => {
    return (
        <header className="flex align-center strong">
            <h2 className="logo">
                <FontAwesomeIcon icon={faSoundcloud} />
            </h2>
        </header>
    )
}

export default HeaderCmp

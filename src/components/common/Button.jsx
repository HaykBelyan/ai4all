import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, link, primary, secondary, onClick, type = 'button' }) => {
    const className = `btn ${primary ? 'primary' : ''} ${secondary ? 'secondary' : ''}`;

    if (link) {
        return (
            <Link to={link} className={className}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
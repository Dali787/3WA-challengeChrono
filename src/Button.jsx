import React from 'react';

const Button = ({ fn, text, disabled }) => {
    return (
        <button onClick={fn} disabled={disabled} style={{ margin: '5px' }}>
            {text}
        </button>
    );
};

export default Button;

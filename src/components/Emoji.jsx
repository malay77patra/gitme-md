import React from 'react';

const Emoji = ({ src, size }) => {

    return (
        <img src={src} style={{ width: size, height: size }} />
    );
};


export default Emoji;

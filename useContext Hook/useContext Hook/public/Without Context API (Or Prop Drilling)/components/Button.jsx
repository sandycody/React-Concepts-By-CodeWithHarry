import React from 'react';
import Component1 from './Component1';

const Button = ({counter}) => {
    return (
        <>
            <button><span><Component1 counter={counter} /></span>I am button</button>
        </>
    )
}

export default Button;

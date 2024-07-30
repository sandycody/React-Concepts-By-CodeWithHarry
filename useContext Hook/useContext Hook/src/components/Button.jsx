import React, { useContext } from 'react';
import Component1 from './Component1';
import counterContext from '../context/context';

const Button = () => {
    const { setCount } = useContext(counterContext);
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}><span><Component1 /></span>I am button</button>
        </>
    )
}

export default Button;

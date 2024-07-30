import React from 'react';
import Button from './Button';

const Navbar = ({counter}) => {
    return (
        <>
            <div>
                Navbar
            </div>
            <Button counter={counter} />
        </>
    )
}

export default Navbar;

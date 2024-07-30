import React from 'react';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import About from './About';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav>
                <NavLink className={(e) => e.isActive ? "lightgreen" : ""} to="/"><li>Home</li></NavLink>
                <NavLink className={(e) => e.isActive ? "lightgreen" : ""} to="/about"><li>About</li></NavLink>
                <NavLink className={(e) => e.isActive ? "lightgreen" : ""} to="/contact"><li>Contact</li></NavLink>
                <NavLink className={(e) => e.isActive ? "lightgreen" : ""} to="/login"><li>Login</li></NavLink>
            </nav>
        </>
    )
}

export default Navbar;

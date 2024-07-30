import React, { useEffect } from 'react';

const Navbar = ({color}) => {

    /* Different cases of useEffect hook */

    // Case 1: This will be executed on every render (Example of updating)
    useEffect(() => {
        alert("Hey I will run on every render");
    });

    // Case 2: This will be executed on first render (Example of mounting)
    useEffect(() => {
        alert("Hey this is the first render. Welcome!");
    }, []);


    // Case 3: Execute only when certain values change and we put that in dependency array
    useEffect(() => {
        alert("I am executed because color is changed");
    }, [color]);

    // Example of cleanup function (Unmounting)
    /* This useEffect will run when by chance this component is removed from App.jsx */
    useEffect(() => {
        alert("This is the first render of app.jsx");

        return () => {
            alert("Component is unmounted");
        }

    }, []);

    return (
        <>
            <div>I am a navbar of {color} color.</div>
        </>
    )
}

export default Navbar;

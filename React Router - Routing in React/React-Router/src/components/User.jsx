import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    return (
        <>
            <h1>I am user {useParams().username}</h1>
        </>
    )
}

export default User;

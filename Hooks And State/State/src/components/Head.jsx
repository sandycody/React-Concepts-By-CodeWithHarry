import React from 'react';
import styles from './Head.module.css';

const Head = ({ text }) => {
    return (
        <>
            <h1 className={styles.head}>{text}</h1>
        </>
    )
}

export default Head;

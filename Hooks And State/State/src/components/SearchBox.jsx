import React, { useState } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ handleKeyDown }) => {

    return (
        <>
            <input onKeyDown={handleKeyDown} type="text" placeholder='Enter Item here' className={styles.searchItem} />
        </>
    )
}

export default SearchBox;

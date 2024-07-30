import React from 'react';
import styles from './GetData.module.css';

const GetData = ({data}) => {
  return (
    <>
      <button className={styles.btn} onClick={data}>Confirm</button>
    </>
  )
}

export default GetData;

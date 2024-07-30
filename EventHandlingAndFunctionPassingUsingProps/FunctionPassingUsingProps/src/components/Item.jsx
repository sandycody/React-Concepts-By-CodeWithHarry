import React from 'react';
import styles from './Item.module.css';

const Item = ({item}) => {

    const buyBtn = (event, item) => {
        console.log(event.target.type);
        console.log(`${item} ready to buy`);
    }

    return (
        <>
            <div className={styles.btnContainer}>
                <ul style={{ listStyleType: "none" }}>
                    {item.map(item => (
                        <>
                            <li className={styles.content}>{item}</li>
                            <button 
                                onClick={(event) => buyBtn(event, item)}
                                className={styles.btn}
                            >
                                Buy
                            </button>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Item;

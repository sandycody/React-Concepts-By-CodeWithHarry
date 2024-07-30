import React from 'react';
import styles from './Item.module.css';
import { FaShoppingCart } from "react-icons/fa";

const Item = ({item}) => {

    const buyBtn = (event, item) => {
        alert(`${item} ready to buy`);
    }

    return (
        <>
            <div className={styles.btnContainer}>
                <ul style={{ listStyleType: "none" }}>
                    {item.map(item => (
                        <>
                            <div className={styles.container}>
                                <li className={styles.content}>{item}</li>
                                <button
                                    onClick={(event) => buyBtn(event, item)}
                                    className={styles.btn}
                                >
                                    <FaShoppingCart />
                                </button>
                            </div>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Item;

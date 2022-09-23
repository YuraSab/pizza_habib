import React from 'react';
import styles from "./DrinkOne.module.css";

const DrinkOne = ({item}) => {
    return (
        <div className={styles.onePizza}>
            <div className={styles.title}>
                {item.name}
            </div>
            <div className={styles.image}>
                <img src={`${item.img}`} alt={item.name}  className={styles.pizzaImg}/>
            </div>
            <div className={styles.price}>
                <div>{item.price} грн</div>
            </div>
            <div className={styles.description}>
                {item.description}
            </div>
        </div>
    );
};

export default DrinkOne;
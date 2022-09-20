import React from 'react';
import styles from "./PizzaOne.module.css";
// import image from '../../DataBase/pizza_Photos/pizzas/';


const PizzaOne = ({item}) => {

    // import image from `../../DataBase/pizza_Photos/pizzas/${item.img}`;

    return (
        <div className={styles.onePizza}>
            <div className={styles.image}>
                <img src={`${item.img}`} alt={item.name}/>
            </div>
            <div className={styles.description}>
                <div>{item.name}</div>
            </div>
        </div>
    );
};

export default PizzaOne;
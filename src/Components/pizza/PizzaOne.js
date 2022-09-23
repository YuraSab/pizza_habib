import React from 'react';
import styles from "./PizzaOne.module.css";
// import image from '../../DataBase/pizza_Photos/pizzas/';


const PizzaOne = ({item}) => {

    // import image from `../../DataBase/pizza_Photos/pizzas/${item.img}`;

    return (
        <div className={styles.onePizza}>
            <div className={styles.title}>
                {item.name}
            </div>
            <div className={styles.image}>
                <img src={`${item.img}`} alt={item.name} className={styles.pizzaImg}/>
            </div>
            <div className={styles.price}>
                <div>{item.price} грн</div>
            </div>
            <div className={styles.description}>
                {item.ingredients}
            </div>
        </div>
    );
};

export default PizzaOne;
import React from 'react';
import {pizzas} from "../../DataBase/pizza_DB/pizzaDB";
import PizzaOne from "./PizzaOne";
import styles from "./PizzaList.module.css";

const PizzaList = () => {



    return (
        <div className={styles.listOfPizza}>
            {
                pizzas.map(el => {

                    console.log(el);
                    return(
                        <PizzaOne
                            key={el.id}
                            item={el}
                        />
                    )
                })
            }
        </div>
    );
};

export default PizzaList;
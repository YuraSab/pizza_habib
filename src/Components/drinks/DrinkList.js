import React from 'react';
import styles from "./DrinkList.module.css";
import {drinks} from "../../DataBase/drinks_DB/drinksDB";
import DrinkOne from "./DrinkOne";

const DrinkList = () => {
    return (
        <div className={styles.listOfPizza}>
            {
                drinks.map(el => {

                    // console.log(el);
                    return(
                        <DrinkOne
                            key={el.id}
                            item={el}
                        />
                    )
                })
            }
        </div>
    );
};

export default DrinkList;
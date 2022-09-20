import React from 'react';
import styles from "./Pizza.module.css";
import logo from "../../DataBase/LOGO/logotip.jpg";
import PizzaList from "../../Components/pizza/PizzaList";

const Pizza = () => {
    return (
        <div>
            <div className={styles.firstBlock}>

                <img src={logo} alt={'img'} className={styles.backImage}/>
            </div>
            <div className={styles.firstBlock}>
                <PizzaList/>
            </div>
        </div>
    );
};

export default Pizza;
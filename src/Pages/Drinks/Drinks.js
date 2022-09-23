import React from 'react';
import styles from "./Drinks.module.css";
import logo from "../../DataBase/LOGO/logotip.jpg";
import DrinkList from "../../Components/drinks/DrinkList";

const Drinks = () => {
    return (
        <div>
            <div className={styles.firstBlock}>

                <img src={logo} alt={'img'} className={styles.backImage}/>
            </div>
            <div className={styles.firstBlock}>
                <DrinkList/>
            </div>
        </div>
    );
};

export default Drinks;
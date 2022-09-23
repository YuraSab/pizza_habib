import React from 'react';
import styles from "./AboutUs.module.css";
import Logo from "../../DataBase/LOGO/logotip.jpg";
import pizzaImg from "../../DataBase/pizza_Photos/pizzas/aboutUs.png";

const AboutUs = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src={Logo} alt={"logo"} className={styles.logoImg}/>
            </div>
            <div className={styles.info}>
                Ми українська піцерая з n-річним досвідом. Ви можете скуштувати нашу піцу в наших закладах або здійснити замовлення онлайн.
            </div>
            <div className={styles.picture}>
                <img src={pizzaImg} alt={"pizza"} className={styles.pictureImg}/>
            </div>
        </div>
    );
};

export default AboutUs;
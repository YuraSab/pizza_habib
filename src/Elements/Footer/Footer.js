import React from 'react';
import styles from "./Footer.module.css";
import telegram from "../../DataBase/icons/telegram.png";
import instagram from "../../DataBase/icons/instagram.png";
import twitter from "../../DataBase/icons/twitter.png";
import facebook from "../../DataBase/icons/facebook.png";
import LOGO from "../../DataBase/LOGO/logotip.jpg";

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={`${styles.info} ${styles.logo}`}>
                <div className={styles.icons}>
                    <img src={LOGO} alt={'logo'} width={200}/>
                </div>
                <div className={styles.icons}>
                    <img src={telegram} alt={'telegram'} className={styles.icon}/>
                    <img src={instagram} alt={'instagram'} className={styles.icon}/>
                    <img src={twitter} alt={'twitter'} className={styles.icon}/>
                    <img src={facebook} alt={'facebook'} className={styles.icon}/>
                </div>
            </div>
            <div className={`${styles.info} ${styles.schedule}`}>
                Час роботи<br/>
                пн-пт: 9:00 - 19:00<br/>
                сб-нд: 10:00 - 17:00
            </div>
            <div className={`${styles.info} ${styles.contacts}`}>
                Контакти<br/>
                380-54-148-82-28<br/>
                380-27-322-20-04<br/>
                habibihabobs@gmail.com
            </div>
        </div>
    );
};

export default Footer;
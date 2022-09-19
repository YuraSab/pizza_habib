import React, {useState} from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import burgerMenu from "../../DataBase/tools_Photos/burger_menu.jpg";


const Header = () => {

    const [activeBurger, setActiveBurger] = useState(false);

    // const changeBurger = () => {
    //     setActiveBurger(prevState => !prevState);
    // }


    return (
        <div className={styles.main}>

            <div className={styles.menu}>

                <div>
                    <div
                        className={styles.burgerMenu}
                        // onClick={changeBurger}
                        onClick={() => setActiveBurger(prev => !prev)}
                    >
                        <img src={burgerMenu} alt={'menu'} width={40}/>
                    </div>

                    <div>
                        {
                            activeBurger ? (
                                <div className={styles.burgerListActive}>
                                    <div className={styles.burgerLinks}>
                                        <Link className={styles.burgerLink} to={'pizza'}
                                              onClick={() => setActiveBurger(prev => !prev)}>
                                            Піцца
                                        </Link>
                                        <Link className={styles.burgerLink} to={'drinks'}
                                              onClick={() => setActiveBurger(prev => !prev)}>
                                            Напої
                                        </Link>
                                        <Link className={styles.burgerLink} to={'about-us'}
                                              onClick={() => setActiveBurger(prev => !prev)}>
                                            Про нас
                                        </Link>
                                        <Link className={styles.burgerLink} to={'sales'}
                                              onClick={() => setActiveBurger(prev => !prev)}>
                                            Акції
                                        </Link>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>


                <div className={styles.links}>
                    <Link className={styles.link} to={'pizza'}>
                        Піцца
                    </Link>
                    <Link className={styles.link} to={'drinks'}>
                        Напої
                    </Link>
                    <Link className={styles.link} to={'about-us'}>
                        Про нас
                    </Link>
                    <Link className={styles.link} to={'sales'}>
                        Акції
                    </Link>
                </div>

            </div>
            {/*<div className={styles.tools}>*/}
            {/*    /!*Cart*!/*/}
            {/*    {activeBurger.toString()}*/}
            {/*</div>*/}



        </div>
    );
};

export default Header;
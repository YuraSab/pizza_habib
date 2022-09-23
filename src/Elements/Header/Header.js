import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
// import burgerMenu from "../../DataBase/tools_Photos/wbm.webp";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurgerMenu} from "../../redux/action-creators/burgerMenu";
import cartHeader from "../../DataBase/icons/header-cart.png";

const Header = () => {


    const {active, cart} = useSelector(({active: {active}, cart: {cart}}) => ({active, cart}));
    const dispatch = useDispatch();

    const setActiveBurger = () => {
        dispatch(toggleBurgerMenu());
    }
    // console.log(cart.length)

    return (
        <div className={styles.main}>

            <div className={styles.menu}>

                <div>
                    <div
                        className={styles.burgerMenu}
                        onClick={() => setActiveBurger()}
                    >
                        {/*&#9776;*/}
                        &#x2630;
                        {/*<img src={burgerMenu} alt={'menu'} width={40}/>*/}
                    </div>

                    <div>
                        {
                            // activeBurger ? (
                            active ? (
                                <div
                                    className={styles.burgerListActive}
                                >
                                    <div className={styles.burgerLinks}>
                                        <Link className={styles.burgerLink} to={'pizza'}
                                              onClick={() => setActiveBurger()}
                                        >
                                            Піцца
                                        </Link>
                                        <Link className={styles.burgerLink} to={'drinks'}
                                              onClick={() => setActiveBurger()}
                                        >
                                            Напої
                                        </Link>
                                        <Link className={styles.burgerLink} to={'about-us'}
                                              onClick={() => setActiveBurger()}
                                        >
                                            Про нас
                                        </Link>
                                        <Link className={styles.burgerLink} to={'sales'}
                                              onClick={() => setActiveBurger()}
                                        >
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

            <div className={styles.tools}>
                <Link to={'cart'}>
                    <img src={cartHeader} alt={"cart"} className={styles.cartHeader}/>
                </Link>
                <div>
                    {cart.length}
                </div>

                {/*{activeBurger.toString()}*/}
            </div>

        </div>
    );
};

export default Header;
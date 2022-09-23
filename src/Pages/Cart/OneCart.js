import React from 'react';
import styles from "./Cart.module.css";
import cartItem from "../../DataBase/icons/cartItem.png";
import {useDispatch} from "react-redux";
import {onAddToCart} from "../../redux/action-creators/cart";


const OneCart = ({item}, isActive) => {

    const dispatch = useDispatch();

    const addInCart = () => {
        dispatch(onAddToCart(item));
    }



    return (
        <div className={styles.grid}>
            <div className={styles.photo}>
                <img src={`${item.img}`} alt={item.name} className={styles.pizzaImg}/>
            </div>
            <div className={styles.title}>
                {item.name}
            </div>
            <div className={styles.price}>
                <div>{item.price} грн</div>
            </div>
            <div className={styles.cart}
                 onClick={() => addInCart()}
            >
                <img src={cartItem} alt="cart"
                     className={`${styles.cartItem} ${isActive ? styles.active : styles.noActive}`}
                />
            </div>
        </div>
    );
};

export default OneCart;
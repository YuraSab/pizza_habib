import React from 'react';
import styles from "./DrinkOne.module.css";
import cartItem from "../../DataBase/icons/cartItem.png";
import {useDispatch, useSelector} from "react-redux";
import {onAddToCart} from "../../redux/action-creators/cart";

const DrinkOne = ({item}) => {


    const {cart} = useSelector(({cart: {cart}}) => ({cart}));

    const isActive = cart.find(el => el.id === item.id);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(onAddToCart(item));
    }

    return (
        <div className={styles.onePizza}>
            <div className={styles.title}>
                {item.name}
            </div>
            <div className={styles.image}>
                <img src={`${item.img}`} alt={item.name}  className={styles.pizzaImg}/>
            </div>
            <div className={styles.price}>
                <div>{item.price} грн</div>
                <div onClick={() => addToCart()}>
                    <img src={cartItem} alt="cart"
                         className={`${styles.cartItem} ${isActive ? styles.active : styles.noActive}`}
                    />
                </div>
            </div>
            <div className={styles.description}>
                {item.description}
            </div>
        </div>
    );
};

export default DrinkOne;
import React from 'react';
import {useSelector} from "react-redux";
import OneCart from "./OneCart";
import styles from "./Cart.module.css";


const Cart = () => {

    const {cart} = useSelector(({cart: {cart}}) => ({cart}));

    let initialValue = 0;
    let totalPrice = cart.reduce(function (accumulator, currentValue) {
        // const prev = accumulator.price;
        // const next = currentValue.price;
        // return prev + next
        return accumulator + currentValue.price
    }, initialValue);


    return (
        <div className={styles.main}>
            {
                cart.length > 0 ? <div className={styles.blank}>
                    {
                        cart.map(el => {

                            const isActive = cart.find(item => item.id === el.id);

                            return (
                                <OneCart
                                    key={el.id}
                                    item={el}
                                    isActive={isActive}
                                />
                            )
                        })
                    }
                    <div className={styles.grid}>
                        <div className={styles.photo} style={{fontSize: 22, fontWeight: "bold", margin: '5%'}}>
                            Total price
                        </div>
                        <div className={styles.price}>
                            {totalPrice} грн
                        </div>
                    </div>
                </div> : <div className={styles.noSelected}>
                    No selected
                </div>
            }
        </div>
    );
};

export default Cart;
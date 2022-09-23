import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../Elements/Main/Main";
import Pizza from "../../Pages/Pizza/Pizza";
import Drinks from "../../Pages/Drinks/Drinks";
import AboutUs from "../../Pages/About_Us/AboutUs";
import Sales from "../../Pages/Sales/Sales";
import Cart from "../../Pages/Cart/Cart";

const MainOverlay = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Pizza/>}/>
                    <Route path={'pizza'} element={<Pizza/>}/>
                    <Route path={'drinks'} element={<Drinks/>}/>
                    <Route path={'about-us'} element={<AboutUs/>}/>
                    <Route path={'sales'} element={<Sales/>}/>
                    <Route path={'cart'} element={<Cart/>}/>
                </Route>
            </Routes>

        </div>
    );
};

export default MainOverlay;
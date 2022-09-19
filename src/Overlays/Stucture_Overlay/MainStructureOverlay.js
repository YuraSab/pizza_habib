import React from 'react';
import Footer from "../../Elements/Footer/Footer";
import Header from "../../Elements/Header/Header";
import styles from "./MainStructureOverlay.module.css";
import MainOverlay from "../Main_Overlay/MainOverlay";

const MainStructureOverlay = () => {
    return (
        <div className={styles.main}>
            <header>
                <Header/>
            </header>
            <main>
                <MainOverlay/>
            </main>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export default MainStructureOverlay;
import React from "react";
import { Header } from "../components/Header";
import styles from './styles/home.module.css'

export const Home = () => {
    return (
        <div className={styles['home-container']}>
            <Header />
            <div className={styles['content']}>
                <h1>Inicio</h1>
                <p>Esta pagina aun esta en proceso de desarrollo</p>
            </div>
        </div>
    );
};

import React from "react";
import { Header } from '../../components/Layout/Header'
import styles from "./layout.module.css";

export const LayoutDefault = ({ children }) => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <main className={styles.content}>{children}</main>
        </div>
    );
};
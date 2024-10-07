import React from "react";
import {Header} from '../../components/Header'
import styles from "./layout.module.css";

export const LayoutDefault = ({ children }) => {
    return (
        <div className={styles["layout-container"]}>
            <Header />
            <main className={styles["content"]}>{children}</main>
        </div>
    );
};
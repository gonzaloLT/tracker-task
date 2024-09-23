import React from "react";
import {Header} from '../Header'
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
    return (
        <div className={styles["layout-container"]}>
            <Header />
            <main className={styles["content"]}>{children}</main>
        </div>
    );
};

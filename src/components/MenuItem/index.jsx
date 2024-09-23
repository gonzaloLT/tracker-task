import React from "react";
import { Link } from "react-router-dom";
import styles from './menuItem.module.css'

export const MenuItem = ({ to, label, toggleSidebar }) => {
    return (
        <li className={styles['menuItem']}>
            <Link to={to} className={styles['link']} onClick={toggleSidebar}>
                {label}
            </Link>
        </li>
    );
};

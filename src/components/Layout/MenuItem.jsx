import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles/menuItem.module.css'

export const MenuItem = ({ to, label, toggleSidebar }) => {
    return (
        <li className={styles.menuItem}>
            <NavLink 
                to={to} 
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} 
                onClick={toggleSidebar}
            >
                {label}
            </NavLink>
        </li>
    );
};
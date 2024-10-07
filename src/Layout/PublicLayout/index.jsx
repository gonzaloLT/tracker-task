import React, { useState } from 'react'
import styles from './publicLayout.module.css'
import { Link } from 'react-router-dom'

export const PublicLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={styles["layout-container"]}>
        <header className={styles['header']}>
            <div className={styles['logo-container']}>
                <img src="" alt="logo" className={styles['logo']} />
                <h1>Task Tracker</h1>
            </div>

            <nav className={styles['nav']}>
                <div className={styles["hamburger"]} onClick={toggleMenu}>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                </div>

                <ul className={`${styles['nav-links']} ${menuOpen ? styles['nav-links-open'] : ''}`}>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/signup'}>Signup</Link></li>
                </ul>
            </nav>
        </header>

        <main className={styles["content"]}>{children}</main>
    </div>
    )
}

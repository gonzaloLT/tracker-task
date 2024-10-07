import React from 'react'
import styles from './publicLayout.module.css'
import { Link } from 'react-router-dom'

export const PublicLayout = ({ children }) => {
    return (
        <div className={styles["layout-container"]}>
            <header className={styles['header']}>
                <img src="" alt="logo" />

                <div>
                    <nav>
                        <ul>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/signup'}>Signup</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={styles["content"]}>{children}</main>
        </div>
    )
}

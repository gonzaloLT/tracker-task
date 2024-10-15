import React from 'react';
import { PublicHeader } from '../../components/Layout/PublicHeader';
import styles from './publicLayout.module.css';

export const PublicLayout = ({ children }) => {
    return (
        <div className={styles.layoutContainer}>
            <PublicHeader />
            <main className={styles.content}>{children}</main>
        </div>
    );
};
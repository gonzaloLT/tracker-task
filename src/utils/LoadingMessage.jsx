import React from 'react';
import styles from './styles/loadingMessage.module.css';

export const LoadingMessage = ({ message }) => (
    <div className={styles.loadingContainer}>
        <p className={styles.loadingMessage}>{message}</p>
    </div>
);
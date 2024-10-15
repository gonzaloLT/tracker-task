import React from 'react';
import styles from './styles/errorMessage.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';

export const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorContent}>
                <FaExclamationTriangle className={styles.errorIcon} />
                <p className={styles.errorText}>{message}</p>
            </div>
        </div>
    );
};
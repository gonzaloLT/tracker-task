import React from 'react';
import styles from './styles/storyDates.module.css';

export const StoryDates = ({ created, started, finished }) => (
    <div className={styles.card}>
        <h3 className={styles.title}>Fechas importantes</h3>
        <div className={styles.dateItem}>
            <span className={styles.dateLabel}>Creación:</span>
            <span className={styles.dateValue}>{new Date(created).toLocaleDateString()}</span>
        </div>
        <div className={styles.dateItem}>
            <span className={styles.dateLabel}>Inicio:</span>
            <span className={styles.dateValue}>{started ? new Date(started).toLocaleDateString() : 'No iniciado'}</span>
        </div>
        <div className={styles.dateItem}>
            <span className={styles.dateLabel}>Finalización:</span>
            <span className={styles.dateValue}>{finished ? new Date(finished).toLocaleDateString() : 'No finalizado'}</span>
        </div>
    </div>
);
import React from 'react';
import styles from './styles/epicInfo.module.css';

export const EpicInfo = ({ epic }) => (
    <div className={styles.epicDetails}>
        <h2>{epic.name} {epic.icon}</h2>
        <p><b>Descripción:</b> {epic.description}</p>
    </div>
);
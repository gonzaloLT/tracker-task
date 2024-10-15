import React from 'react';
import styles from './styles/storyInfo.module.css';

export const StoryInfo = ({ story }) => (
    <div className={styles.card}>
        <h2 className={styles.title}>{story.name || 'Sin nombre'} {story.icon}</h2>
        <p className={styles.description}>
            <span className={styles.label}>Descripción:</span>
            {story.description || 'Sin descripción'}
        </p>
    </div>
);
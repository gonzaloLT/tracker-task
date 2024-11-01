import React from 'react'
import styles from './styles/storyHeader.module.css'

export const StoryHeader = ({ onCreateStory, isCreating }) => {
    return (
        <div className={styles.storyHeader}>
            <h2 className={styles.title}>Historias</h2>
            <button
                className={styles.addStoryButton}
                onClick={onCreateStory}
                disabled={isCreating}
            >
                {isCreating ? 'Creando historia...' : 'Crear historia'}
            </button>
        </div>
    )
}

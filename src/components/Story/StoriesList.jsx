import React from 'react';
import { StoryCard } from './StoryCard';
import { LoadingMessage } from '../../utils/LoadingMessage';
import styles from './styles/storiesList.module.css';

export const StoriesList = ({ stories, loading, epicId, projectId }) => {


    return (
        <div className={styles.storiesContainer}>
            <div className={styles.header}>
                <h2>Historias</h2>
                <button className={styles.addStoryButton}>Agregar historia</button>
            </div>
            {loading ? (
                <LoadingMessage message="Cargando historias..." />
            ) : (
                <ul>
                    {stories.map(story =>
                        <StoryCard
                            key={story._id}
                            story={story}
                            epicId={epicId}
                            projectId={projectId}
                        />
                    )}
                </ul>
            )}
        </div>

    )


}


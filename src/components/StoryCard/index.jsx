import React from "react";
import { Link } from "react-router-dom";
import styles from "./storyCard.module.css";

export const StoryCard = ({ story, projectId, epicId }) => {
    console.log(projectId)
    return (
        <Link
            to={`/my-projects/${projectId}/${epicId}/${story._id}`}
            className={styles['link']}
        >
            <div className={styles['story-card']}>
                <p className={styles['name']}>Nombre: {story.name}</p>
                <p className={styles['description']}>Descripción: {story.description}</p>
            </div>
        </Link>
    );
};

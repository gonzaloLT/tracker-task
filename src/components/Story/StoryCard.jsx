import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/storyCard.module.css";

export const StoryCard = ({ story, projectId, epicId }) => {
    const linkTo = projectId && epicId 
        ? `/my-projects/${projectId}/${epicId}/${story._id}`
        : `/stories/${story._id}`;

    return (
        <Link to={linkTo} className={styles.link}>
            <div className={styles.storyCard}>
                <p className={styles.name}>Nombre: {story.name}</p>
                <p className={styles.description}>Descripción: {story.description}</p>
            </div>
        </Link>
    );
};
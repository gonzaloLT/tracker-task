import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/storyCard.module.css";

export const StoryCard = ({ story, projectId, epicId }) => {
    return (
        <Link to={`/my-projects/${projectId}/${epicId}/${story._id}`} className={styles.link}>
            <div className={styles.storyCard}>
                <div>
                    <p className={styles.name}>Nombre: {story.name}</p>
                    <p className={styles.description}>Descripción: {story.description}</p>
                </div>
                <button onClick={() => onDelete(story._id)} className={styles.deleteButton}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </Link>
    );
};
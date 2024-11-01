import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/storyCard.module.css";
import { useFetchTasksStory } from "../../hooks/useFetchTasksStory";

export const StoryCard = ({ story, projectId, epicId, onDeleteStory}) => {
    const { data: tasks, loading: loadingTasks } = useFetchTasksStory(story._id);

    return (
        <Link 
            to={`/my-projects/${projectId}/${epicId}/${story._id}`} 
            className={styles.link}>
            <div className={styles.storyCard}>
                <div>
                    <p className={styles.name}>Nombre: {story.name}</p>
                    <p className={styles.description}>Descripción: {story.description}</p>
                </div>
                <button
                    onClick={() => onDeleteStory(story._id, tasks)}
                    className={styles.deleteButton}
                    disabled={loadingTasks}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </Link>
    );
};
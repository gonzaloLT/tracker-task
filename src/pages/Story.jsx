import React from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useParams } from "react-router-dom";
import { useFetchStoryById } from "../hooks/useFetchStoryById";
import { StoryInfo } from "../components/Story/StoryInfo";
import { StoryOwner } from "../components/Story/StoryOwner";
import { StoryDates } from "../components/Story/StoryDates";
import { StoryAssignees } from "../components/Story/StoryAssignees";
import { StoryTasks } from "../components/Story/StoryTasks";
import styles from './styles/story.module.css'

export const Story = () => {
    const { storyId } = useParams();
    const { data: story, loading: loadingStory } = useFetchStoryById(storyId)

    if (loadingStory) {
        return (
            <LayoutDefault>
                <div className={styles.loadingContainer}>
                    <p className={styles.loadingMessage}>Cargando detalles de la historia...</p>
                </div>
            </LayoutDefault>
        );
    }

    if (!story) {
        return (
            <LayoutDefault>
                <div className={styles.errorContainer}>
                    <p className={styles.errorMessage}>Los datos de la historia no están disponibles</p>
                </div>
            </LayoutDefault>
        );
    }

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Detalles de la historia</h1>
                <div className={styles.storyContainer}>
                    <StoryInfo story={story} />
                    <StoryOwner ownerId={story.owner} status={story.status} points={story.points} />
                    <StoryDates created={story.created} started={story.started} finished={story.finished} />
                    <StoryAssignees assignedToIds={story.assignedTo} />
                    <StoryTasks storyId={storyId} />
                </div>
            </div>
        </LayoutDefault>
    );
};
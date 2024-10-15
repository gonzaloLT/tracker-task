import React from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useParams } from "react-router-dom";
import { EpicInfo } from "../components/Epics/EpicInfo";
import { StoriesList } from "../components/Story/StoriesList";
import { LoadingMessage } from "../utils/LoadingMessage";
import { useFetchEpicsById } from "../hooks/useFetchEpicsById";
import { useFetchStoriesEpic } from "../hooks/useFetchStoriesEpic";
import styles from './styles/epic.module.css'

export const Epic = () => {
    const { epicId, projectId } = useParams();
    const { data: epic, loading: loadingEpics } = useFetchEpicsById(epicId)
    const { data: stories, loading: loadingStories } = useFetchStoriesEpic(epicId)

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Detalles de épica</h1>
                {loadingEpics ? (
                    <LoadingMessage message="Cargando detalles de épica..." />
                ) : (
                    <div className={styles.epicContainer}>
                        <EpicInfo epic={epic} />
                        <StoriesList 
                            stories={stories} 
                            loading={loadingStories} 
                            epicId={epicId} 
                            projectId={projectId} 
                        />
                    </div>
                )}
            </div>
        </LayoutDefault>
    );
};
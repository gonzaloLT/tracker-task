import React, { useContext } from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useParams } from "react-router-dom";
import { StoryCard } from "../components/StoryCard";
import { useFetchEpicsById } from "../hooks/useFetchEpicsById";
import { useFetchStoriesEpic } from "../hooks/useFetchStoriesEpic";
import styles from './styles/epic.module.css'

export const Epic = () => {
    const { epicId, projectId } = useParams();
    const { data: epic, loading: loadingEpics } = useFetchEpicsById(epicId)
    const { data: stories, loading: loadingStories } = useFetchStoriesEpic(epicId)

    return (
        <LayoutDefault>
             <h1 className={styles['title']}>Detalles de épica</h1>
            {loadingEpics ? <p className={styles['loading-message']}>Cargando detalles de épica...</p> :
                <div>
                    <div className={styles['details']}>
                        <h2>{epic.name} {epic.icon}</h2>
                        <p><b>Descripción:</b> {epic.description}</p>
                    </div>
                    <div className={styles['stories']}>
                        <h2>Historias</h2>
                        {loadingStories ? <p className={styles['loading-message']}>Cargando historias...</p> : 
                            <ul>
                                {stories.map(story => 
                                    <StoryCard key={story._id} story={story} epicId={epicId} projectId={projectId}/>
                                )}
                            </ul>
                        }
                    </div>
                </div>
            }
        </LayoutDefault>
    )
};
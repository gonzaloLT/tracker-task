import React from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useAuth } from '../auth/AuthProvider';
import { useFetchStories } from "../hooks/useFetchStories";
import { StoriesList } from '../components/Story/StoriesList';
import { LoadingMessage } from "../utils/LoadingMessage";
import styles from './styles/myStories.module.css';

export const MyStory = () => {
    const { user } = useAuth();
    const { data: storiesData, loading: loadingStories } = useFetchStories();

    const myStories = storiesData.filter((story) => story.owner === user._id);

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Mis historias</h1>
                {loadingStories ? (
                    <LoadingMessage message="Cargando tus historias..." />
                ) : (
                    myStories.length > 0 ? (
                        <StoriesList 
                            stories={myStories} 
                            loading={false}
                        />
                    ) : (
                        <p className={styles.noStoriesMessage}>No tienes historias asignadas actualmente.</p>
                    )
                )}
            </div>
        </LayoutDefault>
    );
};

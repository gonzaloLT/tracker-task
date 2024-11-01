import React, { useState } from 'react';
import { StoryCard } from './StoryCard';
import { LoadingMessage } from '../../utils/LoadingMessage';
import { createStory, deleteStory, updateStory } from '../../api/storyApi'
import styles from './styles/storiesList.module.css';
import { useFetchStoriesEpic } from '../../hooks/useFetchStoriesEpic';
import { StoryHeader } from './StoryHeader';
import { CreateStoryModal } from './CreateStoryModal';
import { useAuth } from '../../auth/AuthProvider';
import { useFetchTasksStory } from '../../hooks/useFetchTasksStory';

export const StoriesList = ({epicId, projectId }) => {
    const {user} = useAuth();
    const { data: stories, loading: loading, fetchStoriesEpic } = useFetchStoriesEpic(epicId);
    const [isCreatingStory, setIsCreatingStory] = useState(false); //Controla si el modal de creación está abierto o no
    const [isSubmitting, setIsSubmitting] = useState(false); //Controla si el formulario esta en proceso de envio
    const [isUpdatingModal, setIsUpdatingModal] = useState(false); //Controla si el modal de actualización está abierto o no
    const [storyToUpdate, setStoryToUpdate] = useState(null); //Historia a actualizar
    const [deleteError, setDeleteError] = useState(false); //Controla si hay un error al eliminar la historia

    const handleCreateStoryClick = () => setIsCreatingStory(true);

    const handleCloseModal = () => {
        if (!isSubmitting) {
            setIsCreatingStory(false);
            setIsUpdatingModal(false);
            setStoryToUpdate(null);
        }
    };

    const handleCreatedStory = async (story) => {
        setIsSubmitting(true)
        console.log(story)
        try {
            await createStory({...story, epic: epicId, owner: user._id})
            await fetchStoriesEpic(epicId)
            setIsCreatingStory(false)
        } catch (error) {
            console.log('Error al crear la historia')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDeleteStory = async (storyId, tasks) => {
        if (tasks.length > 0) {
            setDeleteError(true);
            return;
        }
        try {
            const success = await deleteStory(storyId);
            if (success) {
                await fetchStoriesEpic();
                setDeleteError(false);
            }
        } catch (error) {
            console.log(`Error al eliminar la historia ${storyId}`)
        }
    }

    const handleUpdateStoryClick = (story) => {
        setStoryToUpdate(story);
        setIsUpdatingModal(true);
    }

    const handleUpdatedStory = async (updatedStory) => {
        setIsSubmitting(true);
        try {
            await updateStory(updatedStory.id, updatedStory);
            await fetchStoriesEpic();
            setIsUpdatingModal(false);
            setStoryToUpdate(null);
        } catch (error) {
            console.log('Error al actualizar la historia', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.storiesContainer}>
            <StoryHeader onCreateStory={handleCreateStoryClick} isCreating={isCreatingStory} />
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
                            onDeleteStory={handleDeleteStory}
                        />
                    )}
                </ul>
            )}

            <CreateStoryModal
                isOpen={isCreatingStory}
                onClose={handleCloseModal}
                onSubmit={handleCreatedStory}
                isSubmitting={isSubmitting}
            />
        </div>

    )


}


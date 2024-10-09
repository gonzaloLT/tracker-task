import React, { useMemo } from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useParams } from "react-router-dom";
import { TaskCard } from "../components/TaskCard";
import { useFetchStoryById } from "../hooks/useFetchStoryById";
import { useFetchUsersById } from "../hooks/useFetchUsersById";
import styles from './styles/story.module.css'
import { useFetchTasksStory } from "../hooks/useFetchTasksStory";

export const Story = () => {
    const { storyId } = useParams();
    const { data: story, loading: loadingStory } = useFetchStoryById(storyId)

    const ownerId = useMemo(() => story?.owner, [story]);
    const assignedToIds = useMemo(() => story?.assignedTo || [], [story]);

    const { data: owner, loading: loadingOwner } = useFetchUsersById(ownerId)
    const { data: assigned, loading: loadingAssigned } = useFetchUsersById(assignedToIds)
    const { data: tasks, loading: loadingTasks } = useFetchTasksStory(storyId)

    console.log('story', story)
    console.log('owner', owner)
    console.log('assigned', assigned)
    console.log('tasks', tasks)
    return (
        <LayoutDefault>
            <h1 className={styles.h1}>Detalles de la historia</h1>
            {loadingStory ? <p className={styles["loading-message"]}>Cargando detalles de la historia...</p> : (
                story ? (
                    <div className={styles.container}>
                        {/* Tarjeta con nombre y descripción */}
                        <div className={styles.card}>
                            <h2>{story.name || 'Sin nombre'} {story.icon}</h2>
                            <p><b>Descripción:</b> {story.description || 'Sin descripción'}</p>
                        </div>


                        <div className={styles.card}>
                            <b>Propietario: </b>
                            {loadingOwner ? (
                                <p className={styles["loading-message"]}>Cargando propietario...</p>
                            ) : (
                                owner && owner.length > 0 && owner[0]?.name ? (
                                    <span>{owner[0].name.first} {owner[0].name.last}</span>
                                ) : (
                                    <span>No se encontró al propietario</span>
                                )
                            )}

                            <p><b>Estado: </b>{story.status ? story.status : 'Sin estado'}</p>

                            <p><b>Puntos: </b>{story.points !== null ? story.points : 'Sin puntos asignados'}</p>
                        </div>


                        <div className={styles.card}>
                            <span><b>Fecha de creación: </b>{new Date(story.created).toLocaleDateString()}</span>

                            <p><b>Inicio: </b>{story.started ? new Date(story.started).toLocaleDateString() : 'No iniciado'}</p>

                            <p><b>Finalización: </b>{story.finished ? new Date(story.finished).toLocaleDateString() : 'No finalizado'}</p>
                        </div>


                        <div className={styles.assigned}>
                            <b>Asignados a esta historia:</b>
                            {loadingAssigned ? (
                                <p className={styles["loading-message"]}>Cargando asignados...</p>
                            ) : (
                                assigned && assigned.length > 0 ? (
                                    <ul className={styles['lista']}>
                                        {assigned.map(user => (
                                            <li key={user._id} className={styles['lista']}>{user.name.first} {user.name.last}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No hay usuarios asignados a esta historia</p>
                                )
                            )}
                        </div>

                        <div className={styles.tasks}>
                            <h3>Tareas de la historia</h3>
                            {loadingTasks ? (
                                <p className={styles["loading-message"]}>Cargando tareas...</p>
                            ) : (
                                tasks && tasks.length > 0 ? (
                                    <ul>
                                        {tasks.map(task => (
                                            <TaskCard key={task._id} task={task} />
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No hay tareas en esta historia</p>
                                )
                            )}
                        </div>
                    </div>
                ) : (
                    <p>Los datos de la historia no están disponibles</p>
                )
            )}
        </LayoutDefault>
    );
};
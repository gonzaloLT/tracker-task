import React from 'react';
import { useFetchUsersById } from "../../hooks/useFetchUsersById";
import { getOwnerName } from "../../utils/getOwnerName";
import styles from './styles/storyAssignees.module.css';

export const StoryAssignees = ({ assignedToIds }) => {
    const { data: assigned, loading: loadingAssigned } = useFetchUsersById(assignedToIds);

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Asignados a esta historia</h3>
            {loadingAssigned ? (
                <p className={styles.loadingMessage}>Cargando asignados...</p>
            ) : assigned && assigned.length > 0 ? (
                <ul className={styles.list}>
                    {assigned.map(user => (
                        <li key={user._id} className={styles.listItem}>{getOwnerName([user])}</li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noAssignees}>No hay usuarios asignados a esta historia</p>
            )}
        </div>
    );
};
import React from 'react';
import { useFetchUsersById } from "../../hooks/useFetchUsersById";
import { getOwnerName } from "../../utils/getOwnerName";
import styles from './styles/storyOwner.module.css';

export const StoryOwner = ({ ownerId, status, points }) => {
    const { data: owner, loading: loadingOwner } = useFetchUsersById(ownerId);

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Detalles del propietario</h3>
            <div className={styles.ownerInfo}>
                <span className={styles.label}>Propietario:</span>
                {loadingOwner ? (
                    <p className={styles.loadingMessage}>Cargando propietario...</p>
                ) : (
                    <span className={styles.value}>{getOwnerName(owner)}</span>
                )}
            </div>
            <div className={styles.statusInfo}>
                <span className={styles.label}>Estado:</span>
                <span className={styles.value}>{status || 'Sin estado'}</span>
            </div>
            <div className={styles.pointsInfo}>
                <span className={styles.label}>Puntos:</span>
                <span className={styles.value}>{points !== null ? points : 'Sin puntos asignados'}</span>
            </div>
        </div>
    );
};
import React from "react";
import { Link } from "react-router-dom";
import styles from './epicCard.module.css'

export const EpicCard = ({ epic }) => {
    return (
        <Link
            to={`/my-projects/${epic.project}/${epic._id}`}
            className={styles['epic-link']}
        >
            <div className={styles['epic-card']}>
                <p className={styles["name-epica"]}>Nombre de epica: {epic.name}</p>
                <p className={styles["description-epica"]}>
                    Descripcion: {epic.description}
                </p>
                <p className={styles["icon-epica"]}>Icono: {epic.icon}</p>
            </div>
        </Link>
    );
};

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
                <p className={styles["name-epica"]}><b>Nombre de epica:</b> {epic.name}</p>
                {epic.description &&
                    <p className={styles["description-epica"]}>
                        <b>Descripcion:</b> {epic.description}
                    </p>
                }
                {epic.icon &&
                    <p className={styles["icon-epica"]}><b>Icono:</b> {epic.icon}</p>
                }
            </div>
        </Link>
    );
};

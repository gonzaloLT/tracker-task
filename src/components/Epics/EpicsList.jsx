import React from 'react'
import styles from './styles/epicsList.module.css'
import { EpicCard } from './EpicCard'

export const EpicsList = ({ epics }) => (
    <div className={styles.epics}>
        <h3>Épicas del proyecto</h3>
        {epics && epics.length > 0 ? (
            <ul>
                {epics.map(epic => <EpicCard key={epic._id} epic={epic} />)}
            </ul>
        ) : (
            <p className={styles["no-epics-message"]}>Este proyecto no tiene épicas</p>
        )}
    </div>
)
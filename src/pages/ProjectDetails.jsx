import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { EpicCard } from '../components/EpicCard';
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useFetchProjectsById } from '../hooks/useFetchProjectsById';
import { useFetchUsersById } from '../hooks/useFetchUsersById';
import { useFetchEpics } from '../hooks/useFetchEpics';
import styles from './styles/projectDetails.module.css'

export const ProjectDetails = () => {
    const { projectId } = useParams();
    const { data: project, loading: loadingProject } = useFetchProjectsById(projectId);

    const membersIds = useMemo(() => {
        return project && project.members ? project.members : [];
    }, [project]);

    const { data: owner, loading: loadingOwner } = useFetchUsersById(project?.owner)

    const { data: members, loading: loadingMembers } = useFetchUsersById(membersIds)

    const { data: epics, loading: loadingEpics } = useFetchEpics(projectId)

    return (
        <LayoutDefault>
            <h1 className={styles.h1}>Detalles del proyecto</h1>
            {loadingProject ? <p className={styles["loading-message"]}>Cargando detalles del proyecto</p> :
                <div className={styles.container}>
                    <div className={styles.details}>
                        <h2>{project.name} {project.icon}</h2>
                        <p><b>Descripción:</b> {project.description}</p>
                        <b>Propietario:</b>
                        {loadingOwner ? 'Cargando propietario...' :
                            owner && owner.length > 0 && owner[0]?.name
                                ? `${owner[0].name.first} ${owner[0].name.last}`
                                : 'No se encontró al propietario'
                        }
                    </div>
                    <div className={styles.members}>
                        <h3>Miembros</h3>
                        {loadingMembers ? <p className={styles["loading-message"]}>Cargando miembros...</p> :
                            members && members.length > 0 ?
                                <ul>
                                    {members.map(member => <li key={member._id}>{member.name.first} {member.name.last}</li>)}
                                </ul>
                                : <p className={styles["no-members-message"]}>No hay miembros en este proyecto</p>
                        }
                    </div>
                    <div className={styles.epics}>
                        <h3>Épicas del proyecto</h3>
                        {loadingEpics ? <p className={styles["loading-message"]}>Cargando épicas...</p> :
                            epics && epics.length > 0 ?
                                <ul>
                                    {epics.map(epic => <EpicCard key={epic._id} epic={epic}></EpicCard>)}
                                </ul>
                                : <p className={styles["no-epics-message"]}>Este proyecto no tiene épicas</p>
                        }
                    </div>
                </div>
            }
        </LayoutDefault>
    );
};
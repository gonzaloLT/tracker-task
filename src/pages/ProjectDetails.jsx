import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useFetchProjectsById } from '../hooks/useFetchProjectsById';
import { useFetchUsersById } from '../hooks/useFetchUsersById';
import { useFetchEpics } from '../hooks/useFetchEpics';
import { ProjectInfo } from '../components/Project/ProjectInfo';
import { MembersList } from '../components/User/MemberList';
import { EpicsList } from '../components/Epics/EpicsList';
import { LoadingMessage } from '../utils/LoadingMessage';
import { ErrorMessage } from '../utils/ErrorMessage';
import styles from './styles/projectDetails.module.css';

export const ProjectDetails = () => {
    const { projectId } = useParams();
    const { data: project, loading: loadingProject} = useFetchProjectsById(projectId);

    const membersIds = useMemo(() => project?.members || [], [project]);

    const { data: owner, loading: loadingOwner} = useFetchUsersById(project?.owner);
    const { data: members, loading: loadingMembers} = useFetchUsersById(membersIds);
    const { data: epics, loading: loadingEpics} = useFetchEpics(projectId);

    const isLoading = loadingProject || loadingOwner || loadingMembers || loadingEpics;
    /* const error = projectError || ownerError || membersError || epicsError; */

    if (isLoading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando datos del proyecto..." />
            </LayoutDefault>
        );
    }

    /* if (error) {
        return (
            <LayoutDefault>
                <ErrorMessage message="Hubo un error al cargar los datos del proyecto. Por favor, intenta de nuevo más tarde." />
            </LayoutDefault>
        );
    } */

    if (!project) {
        return (
            <LayoutDefault>
                <ErrorMessage message="Los datos del proyecto no están disponibles" />
            </LayoutDefault>
        );
    }

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Detalles del proyecto</h1>
                <div className={styles.container}>
                    <ProjectInfo project={project} owner={owner[0]} />
                    <MembersList members={members} />
                    <EpicsList epics={epics} />
                </div>
            </div>
        </LayoutDefault>
    );
};
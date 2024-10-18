import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useFetchProjectsById } from '../hooks/useFetchProjectsById';
import { useFetchUsersById } from '../hooks/useFetchUsersById';
import { useFetchEpics } from '../hooks/useFetchEpics';
import { ProjectInfo } from '../components/Project/ProjectInfo';
import { MembersList } from '../components/User/MemberList';
import { EpicsList } from '../components/Epics/EpicsList';
import { LoadingMessage } from '../utils/LoadingMessage';
import { ErrorMessage } from '../utils/ErrorMessage';
import { IoArrowBack } from 'react-icons/io5';
import styles from './styles/projectDetails.module.css';

export const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const { data: project, loading: loadingProject } = useFetchProjectsById(projectId);

    const membersIds = useMemo(() => project?.members || [], [project]);

    const { data: owner, loading: loadingOwner } = useFetchUsersById(project?.owner);
    const { data: members, loading: loadingMembers } = useFetchUsersById(membersIds);
    const { data: epics, loading: loadingEpics } = useFetchEpics(projectId);

    const isLoading = loadingProject || loadingOwner || loadingMembers || loadingEpics;

    if (isLoading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando datos del proyecto..." />
            </LayoutDefault>
        );
    }

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
                <button className={styles.backButton} onClick={() => navigate('/my-projects')}>
                    <IoArrowBack /> Volver
                </button>
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
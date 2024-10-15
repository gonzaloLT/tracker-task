import React from 'react';
import { ProjectCard } from '../components/Project/ProjectCard';
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useFetchProjects } from '../hooks/useFetchProjects';
import styles from './styles/projects.module.css'

export const Projects = () => {
    const {data: projects, loading: loadingProjects} = useFetchProjects();

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Mis proyectos</h1>
                <div className={styles.projectsList}>
                    {loadingProjects ? (
                        <div className={styles.loadingContainer}>
                            <p className={styles.loadingMessage}>Cargando proyectos...</p>
                        </div>
                    ) : projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))
                    ) : (
                        <p className={styles.noProjectsMessage}>No hay proyectos</p>
                    )}
                </div>
            </div>
        </LayoutDefault>
    );
};
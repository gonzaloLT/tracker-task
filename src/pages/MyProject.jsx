import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useFetchProjects } from '../hooks/useFetchProjects';
import styles from './styles/projects.module.css'

export const Project = () => {
    const {data: projects, loading: loadingProjects} = useFetchProjects();

    return (
        <LayoutDefault>
            <h1 className={styles['header-title']}>Mis proyectos</h1>
            <div className={styles["projects-list"]}>
                {loadingProjects ? (
                    <p className={styles["loading-message"]}>Cargando proyectos...</p>
                ) : projects && projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))
                ) : (
                    <p className={styles["no-projects-message"]}>No hay proyectos</p>
                )}
            </div>
        </LayoutDefault>
    );
};
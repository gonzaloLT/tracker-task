import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Layout } from '../components/Layout';
import { TOKEN } from '../TOKEN';
import { useFetchProjects } from '../hooks/useFetchProjects';

export const Project = () => {
    const {data: projects, loading: loadingProjects} = useFetchProjects(TOKEN);

    return (
        <Layout>
            <h1>Mis proyectos</h1>
            <div>
                {loadingProjects ? (
                    <p>Cargando proyectos...</p>
                ) : projects && projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))
                ) : (
                    <p>No hay proyectos</p>
                )}
            </div>
        </Layout>
    );
};


/*  : projectsError ? (
                    <p> Error al cargar los proyectos: { projectsError.message} </p>
                ) */
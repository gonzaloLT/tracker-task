import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Layout } from '../components/Layout';
import useFetch from '../hooks/useFetch';
import { TOKEN } from '../TOKEN';

export const Project = () => {
        
    const {
        data: projectsData,
        loading: projectsLoading,
        error: projectsError,
    } = useFetch(
        'https://lamansysfaketaskmanagerapi.onrender.com/api/projects',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                auth: TOKEN,
            },
        }
    );

    const projects = projectsData?.data || [];
    
    return (
        <Layout>
            <h1>Mis proyectos</h1>
            <div>
                {projectsLoading ? (
                    <p>Cargando proyectos...</p>
                ) : projectsError ? (
                    <p> Error al cargar los proyectos: { projectsError.message} </p>
                ) : projects.length > 0 ? (
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

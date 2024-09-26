import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Layout } from '../components/Layout';
import useFetch from '../hooks/useFetch';

export const Project = () => {
    //Token provisorio
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOnsiZmlyc3QiOiJKdWFuIElnbmFjaW8iLCJsYXN0IjoiU3VhcmV6In0sIl9pZCI6IjY0ZDUzMjgxMmJhMGUyMDAzMDZjZTUwZSIsImVtYWlsIjoianVhbmlnbmFjaW9zQGZha2UuY29tIiwidXNlcm5hbWUiOiJqdWFuaXMiLCJfX3YiOjB9LCJpYXQiOjE3MjczNzI1MzAsImV4cCI6MTcyNzQ1ODkzMH0.MRDx2Of9oX7yrYROJwq9YYGuMasUhGk9UtpELGvvCRc';

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
                auth: token,
            },
        }
    );

    const projects = projectsData?.data || [];

    console.log(projects);

    return (
        <Layout>
            <h1>Mis proyectos</h1>
            <div>
                {projectsLoading ? (
                    <p>Cargando proyectos...</p>
                ) : projectsError ? (
                    <p>
                        Error al cargar los proyectos: {projectsError.message}
                    </p>
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

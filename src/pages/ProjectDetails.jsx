import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import { EpicCard } from '../components/EpicCard';
import { Layout } from '../components/Layout';
import useFetch from '../hooks/useFetch';
import { TOKEN } from '../TOKEN';

export const ProjectDetails = () => {
    const { projectId } = useParams();
    const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}`;

    const { data: projectData, loading: projectLoading,error: projectError,} = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            auth: TOKEN,
        },
    });


    // const { data: epicsData, loading: epicsLoading, error: epicsError } = useFetch(urlEpics, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         auth: TOKEN,
    //     },
    // });
    const { epicsData } = useContext(ProjectContext);

    const project = projectData?.data || null;

    return (
        <Layout>
            <h1>Detalles del proyecto</h1>
            {projectLoading ? (
                <p>Cargando detalles del proyecto...</p>
            ) : projectError ? (
                <p>
                    Error al cargar los detalles del proyecto:{' '}
                    {projectError.message}
                </p>
            ) : project ? (
                <>
                    <h2 className='name-project-details'>{project.name}</h2>
                    <p className='description-project-details'>
                        Descripcion: {project.description}
                    </p>
                    <p className='members-project-details'>
                        Miembros en este proyecto: {project.members.join(', ')}
                    </p>
                    {/* <div className='epicas-project-details'>
                        <h3>Epicas</h3>
                        <ul>
                            {epicsData
                                .filter((epic) => epic.project === projectId)
                                .map((epic) => (
                                    <EpicCard key={epic._id} epic={epic} />
                                ))}
                        </ul>
                    </div> */}
                </>
            ) : (
                <p>No existe el proyecto</p>
            )}
        </Layout>
    );
};

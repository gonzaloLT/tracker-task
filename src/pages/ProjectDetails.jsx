import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import { EpicCard } from '../components/EpicCard';
import { Layout } from '../components/Layout';

export const ProjectDetails = () => {


    const { projectId } = useParams();

    const { projectsData, loading, epicsData } = useContext(ProjectContext);

    const project = projectsData.find((project) => project._id === projectId);

    return (
        <Layout>
            <h1>Detalles del proyecto</h1>
            {loading && <p>Cargando detalles del proyecto...</p>}

            {project && (
                <>
                    <h2 className='name-project-details'>{project.name}</h2>
                    <p className='description-project-details'>
                        Descripcion: {project.description}
                    </p>
                    <p className='members-project-details'>
                        Miembros en este proyecto: {project.members.join(', ')}
                    </p>
                    <div className='epicas-project-details'>
                        <h3>Epicas</h3>
                        <ul>
                            {epicsData
                                .filter((epic) => epic.project === projectId)
                                .map((epic) => (
                                    <EpicCard key={epic._id} epic={epic} />
                                ))}
                        </ul>
                    </div>
                </>
            )}
        </Layout>
    );
};

import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { EpicCard } from '../components/EpicCard';
import { Layout } from '../components/Layout';
import { useFetchProjectsById } from '../hooks/useFetchProjectsById';
import { useFetchUsersById } from '../hooks/useFetchUsersById';
import { useFetchEpics } from '../hooks/useFetchEpics';

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
        <Layout>
            <h1>Detalles del proyecto</h1>
            {loadingProject ? <p>Cargando detalles del proyecto </p> :
                <div>
                    <div className='details'>
                        <h2>{project.name} {project.icon}</h2>
                        <p><b>Descripcion:</b> {project.description}</p>
                        <b>Propietario:</b>
                        {loadingOwner ? 'Cargando propietario...' :
                            owner && owner.length > 0 && owner[0]?.name
                                ? `${owner[0].name.first} ${owner[0].name.last}`
                                : 'No se encontró al propietario'
                        }
                    </div>
                    <div className='members'>
                        <h3>Miembros</h3>
                        {loadingMembers ? <p>Cargando miembros...</p> :
                            members && members.length > 0 ?
                                <ul>
                                    {members.map(member => <li key={member._id}>{member.name.first} {member.name.last}</li>)}
                                </ul>
                                : <p>No hay miembros en este proyecto</p>
                        }
                    </div>
                    <div className='epics'>
                        <h3>Epicas del proyecto</h3>
                        {loadingEpics ? <p>Cargando epicas...</p> :
                        epics && epics.length > 0 ? 
                            <ul>
                                {epics.map(epic => <EpicCard key={epic._id} epic={epic}></EpicCard>)}
                            </ul>
                            : <p>Este projecto no tiene epicas</p>
                        }
                    </div>
                </div>
            }
        </Layout>
    );
};
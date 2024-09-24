import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import { ProjectContext } from "../context/ProjectContext";
import { useParams } from "react-router-dom";
import { StoryCard } from "../components/StoryCard";

export const Epic = () => {
    const { epicId, projectId } = useParams();
    const { epicsData, storiesData, loading } = useContext(ProjectContext);

    const epic = epicsData.find((epic) => epic._id === epicId);

    if (!epic) {
        return <div>Epica no encontrada</div>;
    }

    return (
        <Layout>
            <h1>Detalles de la epica</h1>
            {loading && <p>Cargando detalles de la epica</p>}
            <h2>{epic.name}</h2>
            <p>Descripcion: {epic.description}</p>
            <p>Icono: {epic.icon}</p>
            <h3>Historias</h3>
            <ul>
                {storiesData
                    .filter((story) => story.epic === epicId)
                    .map((story) => (
                        <StoryCard key={story._id} story={story} epicId={epicId} projectId={projectId} />
                    ))}
            </ul>
        </Layout>
    );
};

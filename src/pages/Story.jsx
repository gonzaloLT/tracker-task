import React, { useContext } from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { ProjectContext } from "../context/ProjectContext";
import { useParams } from "react-router-dom";
import { TaskCard } from "../components/TaskCard";

export const Story = () => {
    const {projectId, epicId, storyId} = useParams();
    const {storiesData, tasksData, loading} = useContext(ProjectContext);

    const story = storiesData.find(story=> story._id == storyId);

    if(!story){
        return <p>No se encontro la historia</p>
    }
    return (
        <LayoutDefault>
            <h1>Detalles de la historia</h1>
            {loading && <p>Cargando detalles de la historia</p>}
            <h2>{story.name}</h2>
            <p>{story.description}</p>
            <div>
                <h3>Tareas</h3>
                <ul>
                    {tasksData.filter(task => task.story === storyId)
                    .map(task=> <TaskCard key={task._id} task={task}/>)}
                </ul>
            </div>
        </LayoutDefault>
    );
};

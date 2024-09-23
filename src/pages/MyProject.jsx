import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {ProjectContext} from '../context/ProjectContext'
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
    const {projectsData, loading} = useContext(ProjectContext);

    if(loading) return <p>Cargando proyectos...</p>

    return (
        <div>
            <h1>Mis proyectos</h1>
            <div>
              {projectsData.map((project)=>
                <ProjectCard key={project.id} project={project}/>
              )}
            </div>
        </div>
    );
};

import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { ProjectCard } from "../components/ProjectCard";
import { Layout } from "../components/Layout";

export const Project = () => {

    const { projectsData, loading } = useContext(ProjectContext);

    return (
        <Layout>
            <h1>Mis proyectos</h1>
            <div>
                {loading ? (
                    <p>Cargando proyectos...</p>
                ) : (
                    projectsData.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))
                )}
            </div>
        </Layout>
    );
};

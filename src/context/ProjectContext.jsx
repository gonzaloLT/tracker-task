import { createContext, useEffect, useState } from "react";
import { mockProjects } from "../mocks/mockProjects";

export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                setTimeout(() => {
                    setProjectsData(mockProjects);
                }, 1000);
            } catch (error) {
                console.log("Error al obtener los proyectos");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <ProjectContext.Provider value={{projectsData, loading}}>
            {children}
        </ProjectContext.Provider>
    );
};

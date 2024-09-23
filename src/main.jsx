import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectContext from "./context/ProjectContext";
import "./index.css";
import { Home } from "./pages/Home";
import { Project } from "./pages/MyProject";
import { ProjectDetails } from "./pages/ProjectDetails";
import { MyStory } from "./pages/MyStory";
import { Epic } from "./pages/Epic";
import { Story } from "./pages/Story";
import { Settings } from "./pages/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/my-projects",
        element: <Project />,
    },
    {
        path: "/my-projects/:projectId",
        element: <ProjectDetails />,
    },
    {
        path: "/my-projects/:projectId/:epicId",
        element: <Epic />,
    },
    {
        path: "/my-projects/:projectId/:epicId/:storyId",
        element: <Story />,
    },
    {
        path: "/my-stories",
        element: <MyStory />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProjectContext.Provider>
            <RouterProvider router={router} />
        </ProjectContext.Provider>
    </StrictMode>
);

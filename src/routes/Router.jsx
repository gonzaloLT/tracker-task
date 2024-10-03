import {createBrowserRouter} from 'react-router-dom'
import { Home } from "../pages/Home";
import { Project } from "../pages/MyProject";
import { ProjectDetails } from "../pages/ProjectDetails";
import { MyStory } from "../pages/MyStory";
import { Epic } from "../pages/Epic";
import { Story } from "../pages/Story";
import { Settings } from "../pages/Settings";
import { Login } from '../pages/Login';

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
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;
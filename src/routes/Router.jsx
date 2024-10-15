import { createBrowserRouter } from 'react-router-dom'
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectDetails } from "../pages/ProjectDetails";
import { MyStory } from "../pages/MyStory";
import { Epic } from "../pages/Epic";
import { Story } from "../pages/Story";
import { Settings } from "../pages/Settings";
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { ProtetedRoute } from '../pages/ProtetedRoute';
import { Dashboard } from '../pages/Dashboard';
import { AuthRoute } from '../pages/AuthRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthRoute >
                <Home />
            </AuthRoute>
        ),
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <ProtetedRoute />,
        children: [
            {
                path: '/home',
                element: <Dashboard />
            },
            {
                path: "/my-projects",
                element: <Projects />,
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
            }
        ]
    }
]);

export default router;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {ProjectProvider} from "./context/ProjectContext";
import "./index.css";
import router from './routes/Router.jsx'
import { TOKEN } from "./TOKEN.js";

localStorage.setItem('token', TOKEN);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProjectProvider>
            <RouterProvider router={router} />
        </ProjectProvider>
    </StrictMode>
);

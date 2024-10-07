import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth/AuthProvider.jsx'
import router from './routes/Router.jsx'
import { TOKEN } from "./TOKEN.js";
import './index.css'

localStorage.setItem('token', TOKEN);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);

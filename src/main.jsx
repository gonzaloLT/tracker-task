import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth/AuthProvider.jsx'
import router from './routes/Router.jsx'
import { TOKEN } from "./TOKEN.js";
import './index.css'
import { Modal } from "./utils/Modal.jsx";
import { FormTask } from "./components/Form/FormTask.jsx";

localStorage.setItem('token', TOKEN);

createRoot(document.getElementById("root")).render(
    <StrictMode>
         <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider> 
        {/* <Modal title={"Crear tarea"}>
            <FormTask />
        </Modal> */}
    </StrictMode>
);

import React from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useAuth } from "../auth/AuthProvider";

export const Dashboard = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <LayoutDefault>
            
            {user && <h1>Hola, {user.name.first} {user.name.last}</h1>}
            <p>Esta pagina aun esta en proceso de desarrollo</p>
        </LayoutDefault>
    );
};

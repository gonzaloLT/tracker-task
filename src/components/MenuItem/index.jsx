import React from "react";
import { Link } from "react-router-dom";

export const MenuItem = ({ to, label, toggleSidebar }) => {
    return (
        <li>
            <Link to={to} onClick={toggleSidebar}>
                {label}
            </Link>
        </li>
    );
};

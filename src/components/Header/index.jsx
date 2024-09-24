import React, {useState} from "react";
import styles from "./header.module.css";
import { Sidebar } from "../Sidebar";

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
      setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <header className={styles["header"]}>
            <div className={styles["menu-button"]} onClick={toggleSidebar}>☰</div>
            <h1 className={styles["title"]}>Task tracker</h1>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        </header>
    );
};

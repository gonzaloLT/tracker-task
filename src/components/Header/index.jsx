import React, {useState} from "react";
import styles from "./header.module.css";
import { Sidebar } from "../Sidebar";
import { Link} from "react-router-dom";

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
      setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <header className={styles["header"]}>
            <div className={styles["menu-button"]} onClick={toggleSidebar}>☰</div>
            <Link to={'/'} className={styles['link']}>
                <h1 className={styles["title"]}>Task tracker</h1>
            </Link>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        </header>
    );
};

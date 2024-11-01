import React from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useParams, useNavigate } from "react-router-dom";
import { EpicInfo } from "../components/Epics/EpicInfo";
import { StoriesList } from "../components/Story/StoriesList";
import { LoadingMessage } from "../utils/LoadingMessage";
import { useFetchEpicsById } from "../hooks/useFetchEpicsById";
import { IoArrowBack } from 'react-icons/io5';
import styles from './styles/epic.module.css'

export const Epic = () => {
    const { epicId, projectId } = useParams();
    const navigate = useNavigate();
    const { data: epic, loading: loadingEpics } = useFetchEpicsById(epicId)

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <button className={styles.backButton} onClick={() => navigate(`/my-projects/${projectId}`)}>
                    <IoArrowBack /> Volver
                </button>
                <h1 className={styles.pageTitle}>Detalles de épica</h1>
                {loadingEpics ? (
                    <LoadingMessage message="Cargando detalles de épica..." />
                ) : (
                    <div className={styles.epicContainer}>
                        <EpicInfo epic={epic} />
                        <StoriesList
                            epicId={epicId}
                            projectId={projectId}
                        />
                    </div>
                )}
            </div>
        </LayoutDefault>
    );
};
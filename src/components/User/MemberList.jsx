import React from 'react'
import styles from './styles/memberList.module.css'

export const MembersList = ({ members }) => (
    <div className={styles.members}>
        <h3>Miembros</h3>
        {members && members.length > 0 ? (
            <ul>
                {members.map(member => <li key={member._id}>{`${member.name.first} ${member.name.last}`}</li>)}
            </ul>
        ) : (
            <p className={styles["no-members-message"]}>No hay miembros en este proyecto</p>
        )}
    </div>
);
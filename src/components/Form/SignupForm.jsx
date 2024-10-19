import React, { useState } from 'react'
import styles from './styles/signupForm.module.css'

export const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <h1>Signup</h1>

                <label className={styles.label}>Nombre</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.inputText}
                />

                <label className={styles.label}>Apellido</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.inputText}
                />

                <label className={styles.label}>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputText}
                />

                <label className={styles.label} >Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputText}
                />

                <label className={styles.label}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputPassword}
                />

                <button className={styles.button}>Registrarse</button>
            </form>

        </div>
    );
}

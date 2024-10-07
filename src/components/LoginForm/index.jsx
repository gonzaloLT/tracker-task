import React, { useState } from 'react';
import styles from './loginform.module.css';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <h1>Login</h1>

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

                <button className={styles.button}>Iniciar sesion</button>
            </form>

        </div>
    );
};

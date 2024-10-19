import React, { useState } from 'react';
import styles from './styles/loginForm.module.css';
import { useAuth } from '../../auth/AuthProvider';

export const LoginForm = () => {
    const { login } = useAuth()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            setError('');
        } catch (err) {
            setError('Error al iniciar sesión. Por favor verifica tus credenciales.');
        }
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Iniciar Sesion</h1>

                {error && <p className={styles.errorMessage}>{error}</p>}

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

                <button type='submit' className={styles.button}>
                    Iniciar sesion
                </button>
            </form>

        </div>
    );
};

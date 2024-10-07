import React, { useState } from 'react';
import styles from './loginform.module.css';
import { useAuth } from '../../auth/AuthProvider';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { login } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError(null)
            await login(username, password)
        } catch (error) {
            setError('Credenciales no validas, intenta de nuevo')
        }
    }

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

                <button type='submit' className={styles.button}>Iniciar sesion</button>
            </form>

        </div>
    );
};

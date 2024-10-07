import React, {useState} from 'react'
import styles from './signupForm.module.css'

export const SignupForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div className={styles.formContainer}>
        <form className={styles.form}>
            <h1>Signup</h1>

            <label className={styles.label}>Name</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e)=> setName(e.target.value)}
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

            <button className={styles.button}>Login</button>
        </form>

    </div>
);
}

import { useContext, createContext, useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import { API_URL } from "./constants"

const AuthContext = createContext({
    isAuthenticated: false,
    login: async () => { },
    logout: () => { },
    user: null
})



export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp > currentTime) {
                    setIsAuthenticated(true)
                    setUser(decodedToken.user)
                } else {
                    logout()
                }
            } catch (error) {
                console.log('Error en el token: ', error)
            }

        }
    }, [])

    const login = async (username, password) => {
        try {
            const resp = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            const data = await resp.json();

            if (data.status === 'success') {
                localStorage.setItem('token', data.data.token);
                setIsAuthenticated(true)
                setUser(data.data.user)
            } else {
                throw new Error(data.data.message);
            }
        } catch (error) {
            console.log('Error en la peticion de login: ', error)
            throw error;
        }
    }


    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
        setUser(null)
    }
    return <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
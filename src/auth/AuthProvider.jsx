import { useContext, createContext, useState } from "react"

const AuthContext = createContext({
    isAuthenticated: true
})

export const AuthProvider = ({ children })=>{
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return <AuthContext.Provider value={{isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
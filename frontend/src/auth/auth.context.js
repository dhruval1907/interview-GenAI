import { createContext, useState } from "react";

export const authContext = createContext()

export const authProvider = ({ children }) => {

    const [user, setuser] = useState(null)

    const [loading, setloading] = useState(null)

    return (

        <authContext.Provider value={user, setuser, loading, setloading}>
            {children}
        </authContext.Provider>

    )
}

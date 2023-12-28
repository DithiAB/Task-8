import { createContext } from "react";

export const AuthContext= createContext();
export const AuthProvider=({children})=>{
    const user={loggedIn:false}

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
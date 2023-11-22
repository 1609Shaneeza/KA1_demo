import { ReactNode, createContext, useState } from "react";
import UserData from "../interfaces/UserData";
import useUserData from "../hooks/useUserData";


interface UserDataContextType {
    userdata: UserData;
    setUserData: (userData: UserData | {}) => void; 
}

export const UserDataContext = createContext<UserDataContextType | null>(null);


function userDataProvider({ children }: { children: ReactNode}) {
    const { userData, setUserData } = useUserData;


    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export default userDataProvider;
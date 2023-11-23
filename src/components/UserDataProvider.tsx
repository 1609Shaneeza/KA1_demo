import { ReactNode, createContext } from "react";
import UserData from "../interfaces/UserData";
import useUserData from "../hooks/useUserData";


interface UserDataContextType {
    userData: UserData;
    setUserData: (userData: UserData | {}) => void; 
}

export const UserContext = createContext<UserDataContextType | null>(null);


function userDataProvider({ children }: { children: ReactNode}) {
    const { userData, setUserData } = useUserData();


    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export default userDataProvider;
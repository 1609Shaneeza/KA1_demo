import { ReactNode, createContext, useState } from "react";


interface NameContextType {
    name: string;
    age: string;
    address: string;
    setName: (name: string) => void;
    setAge: (age: string) => void;
    setAddress: (address: string) => void;
}


export const NameContext = createContext<NameContextType | null>(null);

function userDataProvider({ children }: { children: ReactNode}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
        <NameContext.Provider value={{name, age, address, setName, setAge, setAddress}}>
            {children}
        </NameContext.Provider>

        </>
    )
}

export default userDataProvider;
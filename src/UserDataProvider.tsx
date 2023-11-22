import { ReactNode, createContext, useState } from "react";


interface NameContextType {
    name: string;
    setName: (name: string) => void;
}

interface AgeContextType {
    age: string;
    setAge: (age: string) => void;
}
interface AddressContextType {
    address: string;
    setAddress: (address: string) => void;
}

export const NameContext = createContext<NameContextType | null>(null);
export const AgeContext = createContext<AgeContextType | null>(null);
export const AddressContext = createContext<AddressContextType | null>(null);

function userDataProvider({ children }: { children: ReactNode}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
        <AgeContext.Provider value={{age, setAge}}>
            {children}
        </AgeContext.Provider>
        <AddressContext.Provider value={{address, setAddress}}>
            {children}
        </AddressContext.Provider>

        </>
    )
}

export default userDataProvider;
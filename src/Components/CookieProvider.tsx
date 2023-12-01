import { ReactNode, createContext, useState } from "react";



interface CookieContext {
    cookieCounter: number;
    setCookieCounter: (cookieCounter: number) => 0;
}

export const cookieContext = createContext < CookieContext | null>(null)

function CookieProvider({children}: {children: ReactNode}) {
    const [cookieCounter, setCookieCounter] = useState(0);
    const [cookieMultiplier, setCookieMultiplier] = useState(1);
    
    const handleClick = () => {
        setCookieCounter(0);
        setCookieCounter(cookieCounter + 1)
    }
    
    const cookiesMultiplier =() => {
        setCookieMultiplier(1)
        
    }
    


    const multiplier = () => {
        if (cookieCounter => 100){
            setCookieMultiplier()
            setCookieMultiplier(cookieMultiplier + 1)
        }
    }




    return (
        <>
        <cookieContext.Provider value ={{cookieCounter, setCookieCounter}}>
            {children}
        </cookieContext.Provider>

        </>
    );


}

export default CookieProvider;
import { ReactNode, createContext, useState } from "react";



interface CookieContext {
    cookieCounter: number;
    setCookieCounter: (cookieCounter: number) => 0;
}

export const cookieContext = createContext < CookieContext | null>(null)

function CookieProvider({children}: {children: ReactNode}) {
    const [cookieCounter, setCookieCounter] = useState(0);



    return (
        <>

        </>
    );


}

export default CookieProvider;
import { useContext } from "react";
import { AddressContext, AgeContext, NameContext } from "./UserDataProvider";

function userDataDisplay() {
    const nameContext = useContext(NameContext);
    const ageContext = useContext(AgeContext);
    const addressContext = useContext(AddressContext);

    return(
        <>
        <p>
        {nameContext?.name}
        {ageContext?.age}
        {addressContext?.address}
        </p>
        </>
    );
}

export default userDataDisplay;
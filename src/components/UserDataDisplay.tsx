import { useContext } from "react";
import { UserDataContext } from "./UserDataProvider";

function userDataDisplay() {
    const nameContext = useContext(UserDataContext);

    return(
        <>
        <ul>
            <li>Name: {nameContext?.userData?.name}</li>
            <li>Age: {nameContext?.userData?.age}</li>
            <li>Address: {nameContext?.userData?.address}</li>
        </ul>
        </>
    );
}

export default userDataDisplay;
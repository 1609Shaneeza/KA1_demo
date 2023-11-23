import { useContext } from "react";
import { UserContext } from "./UserDataProvider";

function userDataDisplay() {
    const dataContext = useContext(UserContext);

    return(
        <>
        <ul>
            <li>Name: {dataContext?.userData?.name}</li>
            <li>Age: {dataContext?.userData?.age}</li>
            <li>Address: {dataContext?.userData?.address}</li>
        </ul>
        </>
    );
}

export default userDataDisplay;
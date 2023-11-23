import { useState } from "react";
import UserData from "../interfaces/UserData";

function useUserData() {
    const UsersData = localStorage.getItem("userData");
    const userDataObject = UsersData
    ?JSON.parse(UsersData): {userName: "", userAge: 0, userAddress: ""};
    const[userData, setUserData] = useState(userDataObject);

    const saveData = (userData: UserData | {}) => {
        localStorage.setItem("userData", JSON.stringify(userData));
        setUserData(userData);
    };

    return{
        userData,
        setUserData: saveData,
    };

}

export default useUserData;
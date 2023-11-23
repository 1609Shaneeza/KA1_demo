import { useContext } from "react";
import { UserContext } from "./UserDataProvider";


function ClearStorageButton() {
    const userDataContext = useContext(UserContext);

    const handleClick = () => {
        userDataContext?.setUserData({});
    };

    return(
        <button type="button" onClick={handleClick}>
            Clear Storage
        </button>
    );
}

export default ClearStorageButton;
import UserDataProvider from "./UserDataProvider";
import UserDataForm from "./UserDataForm";
import UserDataDisplay from "./UserDataDisplay";
import ClearStorageButton from "./ClearStorageButton";

function App() {
return(
    <>
    <div className="box">
    <h2>Hello World</h2>
    <UserDataProvider>
        <div className="bordered1">
            <UserDataForm/>
        </div>
        <div className="bordered">
            <UserDataDisplay />
        </div>
        <div className="bordered">
            <ClearStorageButton />
        </div>
    </UserDataProvider>
    </div>

    </>
);

}

export default App;

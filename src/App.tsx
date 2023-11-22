import UserDataDisplay from "./UserDataDisplay";
import UserDataProvider from "./UserDataProvider";
import UserDataForm from "./UserDataForm";

function App() {
return(
    <>
    <h2>Hello World</h2>
    <UserDataProvider>
        <div className="bordered">
            <UserDataForm/>
        </div>
    </UserDataProvider>

    </>
);

}

export default App

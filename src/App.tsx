import UserDataProvider from "./UserDataProvider";
import UserDataForm from "./UserDataForm";

function App() {
return(
    <>
    <div className="box">
    <h2>Hello World</h2>
    <UserDataProvider>
        <div className="bordered">
            <UserDataForm/>
        </div>
    </UserDataProvider>
    </div>

    </>
);

}

export default App;

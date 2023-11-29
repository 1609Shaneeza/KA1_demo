import { FormEvent, useContext, useState } from "react";
import { UserContext } from "./UserDataProvider";


function userDataForm() {
    const DataContext = useContext(UserContext);
    const [name, setLocalName] = useState("");
    const [age, setLocalAge] = useState("");
    const [address, setLocalAddress] = useState("");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        DataContext?.setUserData({
            name,
            age,
            address,
          });
        setLocalName("");
        setLocalAge("");
        setLocalAddress("");
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" 
            id="name" 
            autoComplete="off" 
            onChange={(e) => setLocalName(e.target.value)} 
            value = {name}
            required
            />
            <label htmlFor="Age">Age:</label>
            <input type="text" 
            id="Age" 
            autoComplete="off" 
            onChange={(e) => setLocalAge(e.target.value)} 
            value = {age}
            required
            />
            <label htmlFor="Address">Address:</label>
            <input type="text" 
            id="name" 
            autoComplete="off" 
            onChange={(e) => setLocalAddress(e.target.value)} 
            value = {address}
            required
            />
            <button>Submit</button>  
        </form>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        </>
    );
}

export default userDataForm;
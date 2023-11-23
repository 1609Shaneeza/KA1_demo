import { FormEvent, useContext, useState } from "react";
import { UserDataContext } from "./UserDataProvider";


function userDataForm() {
    const userDataContext = useContext(UserDataContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        userDataContext?.setUserData({
            name,
            age,
            address,
          });
        setName("");
        setAge("");
        setAddress("");
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" 
            id="name" 
            autoComplete="off" 
            onChange={(e) => setName(e.target.value)} 
            value = {name}
            required
            />
            <label htmlFor="Age">Age:</label>
            <input type="text" 
            id="Age" 
            autoComplete="off" 
            onChange={(e) => setAge(e.target.value)} 
            value = {age}
            required
            />
            <label htmlFor="Address">Address:</label>
            <input type="text" 
            id="name" 
            autoComplete="off" 
            onChange={(e) => setAddress(e.target.value)} 
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
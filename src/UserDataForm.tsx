import { FormEvent, useContext, useState } from "react";
import { NameContext } from "./UserDataProvider";


function userDataForm() {
    const [localName, setLocalName] = useState("");
    const [localAge, setLocalAge] = useState("");
    const [localAddress, setLocalAddress] = useState("");
    const nameContext = useContext(NameContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        nameContext?.setName(localName);
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
            value = {localName}
            required
            />
            <label htmlFor="Age">Age:</label>
            <input type="text" 
            id="Age" 
            autoComplete="off" 
            onChange={(e) => setLocalAge(e.target.value)} 
            value = {localAge}
            required
            />
            <label htmlFor="Address">Address:</label>
            <input type="text" 
            id="name" 
            autoComplete="off" 
            onChange={(e) => setLocalAddress(e.target.value)} 
            value = {localAddress}
            required
            />
            <button>Submit</button>  
        </form>
        <p>Name: {localName}</p>
        <p>Age: {localAge}</p>
        <p>Address: {localAddress}</p>
        </>
    );
}

export default userDataForm;
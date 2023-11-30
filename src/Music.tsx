import axios from "axios";
import { FormEvent, useState } from "react";

function Music() {
    const [music, setMValue] = useState("");
    const [MusicV, setMusicV] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        setMusicV("");
        setErrorMessage("");

        const options = {
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/image/random',
 
        };

        try {
            const response = await axios.request(options)
            console.log(response.data)
        } catch (error) {
            setErrorMessage(String(error));
        }
    }

    return(
        <>
        <form onSubmit={handleClick}>
            <label htmlFor="RAndom">Random dogs</label>
            <input
            type="text"
            id="searches"
            autoComplete="off"
            onChange={(e) => setMValue(e.target.value)}
            value={music}
            />
            <button>Generate</button>
        </form>
        </>
    )
};

export default Music;
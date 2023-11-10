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
            method: 'POST',
            params: {
                image: 'Bernie_I_Am_Once_Again_Asking_For_Your_Support',
                // api_key:  "dc6zaTOxFJmzC",

            },
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'f1fa39c5a1mshd7d4aeda7438503p1fc874jsna8801761a6c2',
                'X-RapidAPI-Host': 'meme-generator-and-template-database.p.rapidapi.com'
            }

        };

        try {
            const response = await axios.get('https://meme-generator-and-template-database.p.rapidapi.com/template/Bernie_I_Am_Once_Again_Asking_For_Your_Support',{
                params: options,
            });   
            const timeSeries = response?.data["Meme(10)"]
            if (timeSeries) {
                const latestTime = Object.keys(timeSeries)[0];
                setMusicV(timeSeries[latestTime]["4.close"]);           
            } else{
                throw Error("Invalid Response Format")
            }
        } catch (error) {
            setErrorMessage(String(error));
        }
    }

    return(
        <>
        <form onSubmit={handleClick}>
            <label htmlFor="RAndom">Random memes</label>
            <input
            type="text"
            id="VRandom"
            autoComplete="off"
            onChange={(e) => setMValue(e.target.value)}
            value={music}
            />
            <button>Generate Meme</button>
        </form>
        </>
    )
};

export default Music;
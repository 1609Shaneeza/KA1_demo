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
            url:'https://google-search72.p.rapidapi.com/search',
            params: {
                q: 'word cup',
                gl: 'us',
                lr: 'lang_en',
                num: '10',
                start: '0'
            },
            headers: {
                'X-RapidAPI-Key': 'f1fa39c5a1mshd7d4aeda7438503p1fc874jsna8801761a6c2',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            },

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
            <label htmlFor="RAndom">Searches</label>
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
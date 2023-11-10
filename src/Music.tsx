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
            url:'https://youtube-search13.p.rapidapi.com/YouTube/Videos/Search',
            params: {
                query: 'mrbeast',
                page: '1'
            },
            headers: {
                'X-RapidAPI-Key': 'f1fa39c5a1mshd7d4aeda7438503p1fc874jsna8801761a6c2',
                'X-RapidAPI-Host': 'youtube-search13.p.rapidapi.com'
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
            <label htmlFor="RAndom">YouTube</label>
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
import axios from "axios"
import { FormEvent, useState } from "react"


function StockSearcher() {
    const [stockcode, setStockCode] = useState("");
    const handleClick = async(e: FormEvent) => {
        e.preventDefault();

        const params = {
            function: "TIME_SERIES_INTRADAY",
            symbol: stockcode,
            interval: "5min",
            apiKey:"UK6ZNP3MKPAOFNZG"
        };

        const response = await axios.get("", {
            params: alphaVantageParams     
        });
    };

    return(
        <>
        <form onSubmit={handleClick}>
            <label htmlFor="stockcode">Stock Code</label>
            <input type="text"
            id = "StockcodeTextbox" 
            autoComplete="off" 
            onChange={e => setStockCode(e.target.value)} 
            value={stockcode} />
            <button>Submit</button>
        </form>
        </>
    )
}

export default StockSearcher;
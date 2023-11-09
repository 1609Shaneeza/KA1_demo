import axios from "axios"
import { FormEvent, useState } from "react"


function StockSearcher() {
    const [stockcode, setStockCode] = useState("");
    const handleClick = async(e: FormEvent) => {
        e.preventDefault();

        const alphaVantageParams = {
            function: "TIME_SERIES_INTRADAY",
            symbol: stockcode,
            interval: "5min",
            apikey:"UK6ZNP3MKPAOFNZG"
        };

        try{
        const response = await axios.get("https://www.alphavantage.co/query", {
            params: alphaVantageParams     
        });
        console.log(response.data);

        const timeSeries = response?.data["Time Series (5min)"];
        if (timeSeries) {
            const latestTime = Object.keys(timeSeries)[0];
            console.log(latestTime);
        } else{
            throw Error("Invalid Response Format");
        }
    }catch (error) {}
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
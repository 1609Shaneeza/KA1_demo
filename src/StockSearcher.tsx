import { FormEvent } from "react"

function StockSearcher() {
    const handleClick = async(e: FormEvent) => {

    }

    return(
        <>
        <form onSubmit={handleClick}>
            <label htmlFor="stockcode">Stock Code</label>
            <input type="text" autoComplete="off" />
            <button>Submit</button>
        </form>
        </>
    )
}
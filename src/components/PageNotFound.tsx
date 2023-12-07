import { useEffect } from "react";


function NotFound() {
    useEffect(() => {
        document.title = "Not Found";
      });
    return (
        <>
        <p>Page Not found</p>
        </>
    )
}

export default NotFound;
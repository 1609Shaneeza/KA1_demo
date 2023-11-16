import CatImage from "./assets/CatImage.jpg";

function PuppyImage() {
    return(
    <>
        <div className = "container">
            <div className = "col-1">
                <h1>Cat Images</h1>

                <img src = {CatImage} width= "20%"/> 
            </div>
        </div>
        </>
    )
    
    
}

export default PuppyImage;
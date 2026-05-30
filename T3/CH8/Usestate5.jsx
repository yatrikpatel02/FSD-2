import { useState } from "react";
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/hero.png"

function Usestate5() {
    const [image, setImage] = useState(img1)
    function changeimage() {
        const images = [img1, img2, img3, img4];
        const randomIndex = Math.floor(Math.random() * images.length); 
        setImage(images[randomIndex])
    }
    return (
        <div>
            <button onClick={changeimage}>Change Image</button>
            <img src={image} alt="Image" height={500} width={500}></img>
        </div>
    )
}

export default Usestate5;
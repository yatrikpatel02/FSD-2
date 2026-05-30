import { useState } from "react";
import img1 from "../assets/hero.png"
import img2 from "../assets/img1.jpeg"

function Usestate4() {
    const [image, setImage] = useState(img1)
    function changeimage() {
        if (image == img1) {
            setImage(img2)
        }
        else {
            setImage(img1)
        }
    }
    return (
        <div>
            <button onClick={changeimage}>Change Image</button>
            <img src={ image } alt="Image" height={500} width={500}></img>
        </div>
    )
}

export default Usestate4;
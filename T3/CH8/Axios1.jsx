import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Axios1() {
    const [image, setimage] = useState("")
    useEffect(() => {
        setInterval(() => {
            axios
                .get("https://randomfox.ca/floof/")
                .then((r) => {
                    console.log(r.data)
                    setimage(r.data)
                })
                .catch((e) => { console.log(e) })
        }, 2000)
    }, [])
    return (
        <>
            <img src={image.image} alt="fox" widht="1000" height="500" />
            <a href={image.link} target="_blank">Image</a>
        </>
    )
}

// for practice 1) - https://official-joke-api.appspot.com/ramdom_joke
// for practice 2) - https://dog.ceo/api/breeds/image/random
// for practice 3) - https://dummy.json.com/quotes
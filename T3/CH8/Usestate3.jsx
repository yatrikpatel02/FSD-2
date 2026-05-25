import { useState } from "react";

function Usestate3() {
    const [name, setname] = useState("LJ university")
    const [c, setColor] = useState("red")
    const [hide, setHide] = useState("hide")

    function changetext() {
        if (name == "LJ university") {
            setname("Welcome student");
        }
        else {
            setname("LJ university");
        }
    }
    function changecolor() {
        if (c == "red") {
            setColor("blue");
        }
        else {
            setColor("red");
        }
    }
    function changeHide() {
        if (hide == "hide") {
            setHide("show")
            setname("")
        }
        else {
            setHide("hide")
            setname("LJ university")
        }
    }
    return (
        <div>
            <h1>useState text and color change example</h1>
            <button onClick={changetext}>change text</button>
            <button onClick={changecolor}>change color</button>
            <button onClick={changeHide}>{hide}</button>
            <h2 style={{ color: c }}>{name}</h2>
        </div>
    )
} export default Usestate3;
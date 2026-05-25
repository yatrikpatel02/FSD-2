import { useState } from "react";

function Usestate2() {
    const [count, setcount] = useState(20);
    function increasecount() {
        if (count >= 50) {
            setcount(count);
        }
        else {
            setcount(count + 1);
        }
    }
    function decreasecount() {
        if (count <= 0) {
            setcount(count);
        }
        else {
            setcount(count - 1);
        }
    }
    return (
        <div>
            <h1>useState increase and decrease counter</h1>
            <button onClick={increasecount}>Click to increase the count</button>
            <button onClick={decreasecount}>Click to decrease the count</button>
            <h2>count:{count}</h2>
        </div>
    )
} export default Usestate2;
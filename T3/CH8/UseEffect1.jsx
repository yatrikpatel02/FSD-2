import { useState, useEffect } from "react";

function UseEffect1() {
    const [count1, setcount1] = useState(0);
    const [count2, setcount2] = useState(0);
    useEffect(() => alert("Effect"),[count1]);          //on using [] it only allows the effect to run on the page load only  and if passing [count1] inside it effect will run for count1 also but not for count2

    return (
        <>
            <button onClick={() => setcount1(count1 + 1)}>Button A {count1}</button>
            <button onClick={() => setcount2(count2 + 1)}>Button B {count2}</button>
        </>
    )
}
export default UseEffect1;
import { useState } from "react";
import { useEffect } from "react";

function UseEffect2() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <>
            <h1>CURRENT TIME</h1>
            <h2>{date.toLocaleTimeString()}</h2>
            <h2>Hours: {date.getHours()}</h2>
            <h2>Minutes: {date.getMinutes()}</h2>
            <h2>Seconds: {date.getSeconds()}</h2>
        </>
    )
}
export default UseEffect2;
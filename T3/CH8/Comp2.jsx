import { useContext } from "react";
import { color } from "./Comp1"
import { obj } from "./Comp"

export default function Comp2() {
    var obj1 = useContext(obj)
    var color1 = useContext(color)
    return (
        <>
            <h1 style={{ color: color1 }}>{obj1.n1}*{obj1.n2}/{obj1.n3} = {(obj1.n1 * obj1.n2) / obj1.n3}</h1>
        </>
    )
}
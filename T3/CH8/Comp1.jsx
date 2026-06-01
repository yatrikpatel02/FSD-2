import { createContext } from "react"
import Comp2 from "./Comp2"
const color = createContext()
export default function Comp1() {
    return (
        <color.Provider value={"red"}>
            <Comp2 />
        </color.Provider>
    )
}
export { color };
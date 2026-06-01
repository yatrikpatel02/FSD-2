import { useReducer } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";

function reducer(state, action) {
    if (state === img1) {
        return state = img2;
    }
    else if (state === img2) {
        return state = img1;;
    }
}
function UseReducer3() {
    const [state, dispatch] = useReducer(reducer, img1)
    return (
        <>
            <img src={state} alt="image" height={300} width={300} />
            <button onClick={() => dispatch()}>Change image</button>
        </>
    )
}
export default UseReducer3;
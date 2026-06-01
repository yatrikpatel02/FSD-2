import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "inc") {
        return state + 2;
    }
    else if (action.type === "dec") {
        if (state <= 0) {
            return state;
        }
        return state - 2;
    }
    else {
        return state;
    }
}
function UseReducer2() {
    const [state, dispatch] = useReducer(reducer, 50)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
        </>
    )
}
export default UseReducer2;
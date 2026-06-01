import { useReducer } from "react";
function reducer(state, action) {
    return state + action;
}
function UseReducer1() {
    const [state, dispatch] = useReducer(reducer, 20)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch(5)}>Click</button>
        </>
    )
}
export default UseReducer1;
import { useContext } from "react";
import { Fname,Lname } from "./UseContext1";

export default function UseContext3(){
    var fn=useContext(Fname)
    var ln=useContext(Lname)
    return(
        <>
            <h1>Welcome {fn} {ln}</h1>
        </>
    )
}
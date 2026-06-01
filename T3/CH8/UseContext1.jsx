import { createContext, useContext } from "react";

import UseContext2 from  "./UseContext2";
const Fname=createContext();
const Lname=createContext();
export default function UseContext1(){
    return(
        <>
            <Fname.Provider value="nidhi">
                <Lname.Provider value="seta">
                    <UseContext2/>
                </Lname.Provider>
            </Fname.Provider>
        </>
    )
}
export {Fname,Lname};
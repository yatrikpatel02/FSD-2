import img1 from "./assets/hero.png"
import "./Myapp.css"

function Myapp() {
    var n="LJU";
    return (
        <div>
            <h1>Hello B2 Students</h1>
            <h2>Hiii</h2>
            <img src="/favicon.svg"/>
            <img src={img1} className="i1"/>
            <h3 style={{color:"blue",fontSize:"35px",fontStyle:"italic"}}>Welcome to {n}</h3>
            {/*Commented*/}  
            {/* 
                MULTI LINE COMMENT
                BTR            
            */}
        </div>
    )
}
export default Myapp
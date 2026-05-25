function Project(props){
    return(
        <div>
            {
                props.data.map((d,i)=>
                    <div key={i}>
                        <h1 style={{color:"red"}}>Project Name:<span style={{color:"blue"}}>{d.pname}</span></h1>
                        <h1 style={{color:"red"}}>Project description:<span style={{color:"blue"}}>{d.desc}</span></h1>
                        <img src={d.img}></img>
                    </div>
                )
            }
        </div>
    )
}
export default Project
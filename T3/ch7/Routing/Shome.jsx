function Home(props) {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <img src=""/>
            <p>Name = {props.data[0].name}</p><br></br>
            <p>course = {props.data[0].course}</p><br></br>
            <p>Education = {props.data[0].Education}</p><br></br>
        </div>
    )
}
export default Home;
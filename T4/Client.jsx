import { useState } from "react";
import axios from "axios";

function Client() {
    const [username, setUsername] = useState("")
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/data", { username })
            alert(`welcome ${username}`);
            setUsername("")
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                Username: <input type="text" placeholder="Enter Username" value={username} onChange={(e) => { setUsername(e.target.value) }} /><br />
                <input type="submit" />
            </form>
            <h1>Welcome {username}</h1>
        </>
    )
}
export default Client;
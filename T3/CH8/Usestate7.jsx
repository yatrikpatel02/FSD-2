import { useState } from "react";
function Usestate7() {
    const [formdata, setFormdata] = useState({});
    function handlesubmit(e) {

        if (formdata.pass.length < 8) {
            alert("password must be of minimum length 8")
        }
        if (formdata.pass !== formdata.cpass) {
            alert("Error: Passwords do not match!");
            return;
        }
        else {
            e.preventDefault();
            alert(`Thank You! Welcome ${formdata.un}`)
        }

    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }
    return (
        <form onSubmit={handlesubmit}>
            <label>Username:<input type="text" name="un" onChange={handleChange} required /><br></br></label>

            <label>Email:<input type="email" name="eid" onChange={handleChange} required /><br></br></label>

            <label>contact number:<input type="tel" name="num" onChange={handleChange} required minLength="10" maxLength="10" /><br></br></label>

            <label>Password:<input type="password" name="pass" onChange={handleChange} required /><br></br></label>

            <label>confirm password:<input type="password" name="cpass" onChange={handleChange} required /><br></br></label>

            <label>TextArea:<textarea name="msg" onChange={handleChange}></textarea><br></br></label>

            Gender: <input type="radio" name="gender" value="male" onChange={handleChange} />Male
            <input type="radio" name="gender" value="female" onChange={handleChange} />Female<br></br>

            Hobbies: <input type="checkbox" name="hobbies" value="cricket" onChange={handleChange} />Cricket
            <input type="checkbox" name="hobbies" value="football" onChange={handleChange} />Football
            <input type="checkbox" name="hobbies" value="volleyball" onChange={handleChange} />volleyball
            <input type="checkbox" name="hobbies" value="other" onChange={handleChange} />Other<br></br>

            <select name="city" onChange={handleChange}>
                <option value="">SELECT</option>
                <option value="ahm">Ahmedabad</option>
                <option value="raj">Rajkot</option>
            </select>

            <input type="submit" />
        </form>
    )
}
export default Usestate7;
function Events3() {
    const handleSubmit = (e) => {
        e.preventDefault();
        var u = document.getElementById("un").value;
        alert(`hello ${u}`);
    }

    const handleChange = (e) => {
        document.getElementById("test").innerHTML = e.target.value;
        document.getElementById("test").style.color = "red";
        console.log(e.target.value)
    }

    const handleDoubleClick = (e) => {
        document.getElementById("test1").innerHTML = "you clicked twice";
        document.getElementById('test1').style.color = 'green';
    }

    return (
        <>
            <h1>Handle events example</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} id="un" />

                Click Here
                <input type="submit" />
            </form>
            <h2 id="test"></h2>
            <button on onDoubleClick={handleDoubleClick}>Click here</button>
            <h2 id="test1"></h2>

        </>
    )
}
export default Events3;
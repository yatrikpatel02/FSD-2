function Events1() {
    const handleClick = (n) => {
        alert(`Welcome ${n}`);
    }
    
    return (
        <>
            <button onClick={() => handleClick("ABC")}>
                Click Here
            </button>
        </>
    )
}
export default Events1;
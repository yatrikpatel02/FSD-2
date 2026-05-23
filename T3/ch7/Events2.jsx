function Events2() {
    const handleClick = (n) => {
        alert(`you clicked twice ${n}`);
    }

    return (
        <>
            <button onDoubleClick={() => handleClick("ABC")}>
                Click Here
            </button>
        </>
    )
}
export default Events2;
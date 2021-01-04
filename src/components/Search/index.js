function Search(props) {
    function handleChange(e) {
        const { value } = e.target;
        props.handleCallback(value);
    }

    return (
        <div className="inputContainer">
            <input
                type="text"
                placeholder="Buscar curso"
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;

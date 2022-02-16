const containerStyle = {
    display: "flex",
}

const labelStyle = {
    marginRight: "1rem",
}

const inputStyle = {
    width: "60%",
    height: "3rem",
    padding: "0 0.714em",
    borderRadius: "5em",
    backgroundColor: "#fff",
    border: "1rem #000",
    outline: "0",
    boxShadow: "0 0 10px -9px #000",
};

const SearchInput = (props) => {
    const { searchValue, handleChange, } = props;

    return (
        <div style={{ ...containerStyle, }}>
            <label htmlFor="search" style={{ ...labelStyle, }}>
                <h3>Cherchez votre adresse</h3>
            </label>
            <input
                style={{ ...inputStyle, }}
                type="text"
                name="name" 
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;

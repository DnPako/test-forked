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
    backgroundColor: "#e8f5ff",
    border: "1rem #000",
    outline: "0",
    boxShadow: "0 0 10px -9px #000",
};

const SearchInput = () => {
    return (
        <div style={{ ...containerStyle, }}>
            <label htmlFor="search" style={{ ...labelStyle, }}>
                <h3>Cherchez votre adresses</h3>
            </label>
            <input
                style={{ ...inputStyle, }}
                type="text"
                name="name" 
                value=""
            />
        </div>
    );
};

export default SearchInput;

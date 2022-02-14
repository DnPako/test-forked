import { useState, } from "react";

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

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div style={{ ...containerStyle, }}>
            <label htmlFor="search" style={{ ...labelStyle, }}>
                <h3>Cherchez votre adresses</h3>
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

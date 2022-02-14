const containerStyle = {
    display: "flex",
}

const labelStyle = {
    marginRight: "1rem",
}

const inputStyle = {

};

const SearchInput = () => {
    return (
        <div style={{ ...containerStyle, }}>
            <label htmlFor="search" style={{ ...labelStyle, }}>
                <h3>Cherchez votre adresses</h3>
            </label>
            <input type="text" name="name" value="" />
        </div>
    );
};

export default SearchInput;

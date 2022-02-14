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
                Cherchez votre adresses
            </label>
            <input type="text" name="name" />
        </div>
    );
};

export default SearchInput;

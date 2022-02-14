const labelStyle = {
    marginRight: "1rem",
}

const inputStyle = {

};

const SearchInput = () => {
    return (
        <>
            <label htmlFor="search" style={{ ...labelStyle, }}>
                <h3>Cherchez votre adresses</h3>
            </label>
            <input type="text" name="name" />
        </>
    );
};

export default SearchInput;

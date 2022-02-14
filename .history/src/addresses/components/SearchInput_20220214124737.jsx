const labelStyle = {
    marginRight: "1rem",
}

const SearchInput = () => {
    return (
        <>
            <label htmlFor="search" style={...labelStyle}>Cherchez votre adresses</label>
            <input type="text" name="name" />
        </>
    );
};

export default SearchInput;

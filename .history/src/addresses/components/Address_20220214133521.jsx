const addressStyle = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#fff",
  marginBottom: "2rem",
  boxShadow:  "15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff",
}

const displayAddress = address => {
    const { properties, } =  address;
    return (
        <li style={{ ...addressStyle, }} key={properties.id}>
            <h2>Label: {properties.label}</h2>
            <ul>
                <li>number: {properties.housenumber}</li>
                <li>street: {properties.street}</li>
                <li>city: {properties.city}</li>
                <li>zipcode: {properties.citycode}</li>
                <li>country: France</li>
                <li>rounded score: {properties.score}</li>
            </ul>
        </li>
    );
};

const Address = (props) => {
    const {
        addressList,
    } = props;
    return (
        <>
            {addressList.length !== 0 && addressList.map(address => displayAddress(address))}
        </>
    );
};

export default Address;

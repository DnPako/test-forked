const displayAddress = address => {
    const { properties, } =  address;
    return (
        <li key={properties.id}>
            <h2>Label: x, xxxxx xxxx xxxxxxx</h2>
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

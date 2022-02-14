const Address = (props) => {
    const {
        addressList,
    } = props;
    return (
        {addressList.length !== 0 && (<li>
        <h2>Label: x, xxxxx xxxx xxxxxxx</h2>
        <ul>
            <li>number: ssssssx</li>
            <li>street: xxx</li>
            <li>city: xxx</li>
            <li>zipcode: xxxxx</li>
            <li>country: France</li>
            <li>rounded score: x.xx</li>
          </ul>
        </li>)}
    );
};

export default Address;

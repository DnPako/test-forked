import addressDispatcher from "../redux/addressDispatcher";

const { getAddresses, } = addressDispatcher;

const mapStateToProps = ({
    addresses: { addressList, },
}) => ({
    addressList,
});

const mapDispatchToProps = {
    handleGetAddresses: getAddresses,
};

export default {
    mapStateToProps,
    mapDispatchToProps,
}
import actions from "./actions";

const {
 GET_ADDRESSES,
 SET_ADDRESSES,
} = actions;

const getAddresses = () => ({
    type: GET_ADDRESSES,
});

const setAddresses = addressList => ({
    type: SET_ADDRESSES,
    addressList,
});

export default {
    getAddresses,
    setAddresses,
};

import actions from "./actions";

const {
 GET_ADDRESSES,
 SET_ADDRESSES,
} = actions;

const getAddresses = (searchValue) => ({
    type: GET_ADDRESSES,
    searchValue,
});

const setAddresses = addressList => ({
    type: SET_ADDRESSES,
    addressList,
});

export default {
    getAddresses,
    setAddresses,
};

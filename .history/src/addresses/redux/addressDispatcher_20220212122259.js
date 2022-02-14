import actions from "./actions";

const {
 GET_ADDRESSES,
 SET_ADDRESSES,
} = actions;

const getAddresses = () => ({
    type: GET_ADDRESSES,
});

const setAddresses = addresses => ({
    type: SET_ADDRESSES,
    addresses,
});

export default {
    getAddresses,
    setAddresses,
};

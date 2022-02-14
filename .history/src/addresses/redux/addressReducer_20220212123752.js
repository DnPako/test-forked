const initialState = {
    addresses: [],
};

const setAddresses = (state, { addresses, }) => ({
    ...state,
    addresses,
});

// In case we have other eventual actions we can simply add the function to this object
// No need to change AdressesReducer
const AddressesActions = {
    SET_ADDRESSES: setAddresses,
};

export default function AdressesReducer(state = initialState, action) {
    if (AddressesActions[action.type]) {
        return AddressesActions[action.type](state, action);
    }
    return state;
};

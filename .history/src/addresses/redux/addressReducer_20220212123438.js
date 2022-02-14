const initialState = {
    addresses: [];
};

const setAddresses = (state, { addresses, }) => ({
    ...state,
    addresses,
});

const AddressesActions = {
    SET_ADDRESSES: setAddresses,
};

export default function AdressesReducer(state = initialState, action) {
    if (AddressesActions[action.type]) {
        return AddressesActions[action.type](state, action);
    }
    return state;
};

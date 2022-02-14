import {
    call,
    fork,
    put,
    takeEvery,
} from "redux-saga/effects";
import actions from "../redux/actions";
import addressDispatcher from "../redux/addressDispatcher";
import { getAddresses, } from "../services/addressesServices";

const {
    GET_ADDRESSES,
    SET_ADDRESSES,
} = actions;

const {
    setAddresses,
} = addressDispatcher;

function* getAddressesRequest(action) {
    const { searchValue, } = action;
    console.log(searchValue);
    try {
        const { data: { features: addressList, }, } = yield call(getAddresses, searchValue);
        yield put(setAddresses(addressList));
    } catch (error) {
        console.log(error);
    }
}

function* watchGetUsers() {
    yield takeEvery(GET_ADDRESSES, getAddressesRequest);
};

const addressesSagas = [
    fork(watchGetUsers),
];

export default addressesSagas;

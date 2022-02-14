import {
    call,
    fork,
    takeEvery,
} from "redux-saga/effects";
import actions from "../redux/actions";
import { getAddresses, } from "../services/addressesServices";

const {
    GET_ADDRESSES,
    SET_ADDRESSES,
} = actions;

function* getAddressesRequest() {
    try {
        const { response, } = yield call(getAddresses);
        console.log(response);
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

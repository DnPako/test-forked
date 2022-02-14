import {
    call,
    fork,
    takeEvery,
} from "redux-saga/effects";
import actions from "../redux/actions";
import { effectTypes } from "redux-saga/effects";

const {
    GET_ADDRESSES,
    SET_ADDRESSES,
} = actions;

function* getAddresses() {
    try {
        
    } catch (error) {
        
    }
}

function watchGetUsers() {
    yield takeEvery(GET_ADDRESSES, getAddresses);
};

const addressesSagas = [
    fork(watchGetUsers),
];

export default addressesSagas;

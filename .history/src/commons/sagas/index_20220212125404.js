import { all, } from 'redux-saga/effects';
import addressesSagas from '../../addresses/saga/addressesSaga';

export default function* rootSaga() {
    yield all([
        ...addressesSagas,
    ]);
}

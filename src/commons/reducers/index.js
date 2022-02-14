import { combineReducers, } from "redux";
import AdressesReducer from "../../addresses/redux/addressReducer";

export default combineReducers({
    addresses: AdressesReducer,
});

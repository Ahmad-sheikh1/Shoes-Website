import { combineReducers } from "redux";
import { Login_Reducer } from "./reducers";
import { BBrands } from "./reducers";

const rootreducer = combineReducers({
    Login: Login_Reducer,
    Brands: BBrands
});

export default rootreducer;

import { combineReducers } from "redux";
import {cartData} from './Reducer'
import { productData } from '../redux/ProductReducer';

export default combineReducers({
    cartData,
    productData
})
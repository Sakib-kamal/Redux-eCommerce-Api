import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants"


function* getProduct(){
    let data = yield fetch('http://localhost:3500/product');
    data = yield data.json()
    yield put({type:SET_PRODUCT_LIST ,data:data})
    console.warn ('action is called', data) 
}

function* ProductSaga(){
yield takeEvery(PRODUCT_LIST, getProduct)
}

export default ProductSaga
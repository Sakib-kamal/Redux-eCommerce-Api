//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";

import createSagaMiddleware from "@redux-saga/core";
import ProductSaga from "./ProductSaga";

const sagaMidleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer:rootReducer,
        middleware: ()=>[sagaMidleware]
    }
    );
    sagaMidleware.run(ProductSaga)

export default store;
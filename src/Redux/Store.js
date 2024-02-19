import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import UseReducer from "./UserSlice"





const Store = configureStore({
    reducer: {
        counter : counterReducer,
        user : UseReducer,
    },
})

export default Store;
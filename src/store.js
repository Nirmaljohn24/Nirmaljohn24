import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import testSlice from "./features/test/testSlice"


const store = configureStore({
    reducer:{
        counter: counterReducer,
        test:testSlice
        
    },
})

export default store;
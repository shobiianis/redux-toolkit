import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/loginSlice";

const store=configureStore({
    reducer:{
        Login:loginSlice
    }
})

export default store
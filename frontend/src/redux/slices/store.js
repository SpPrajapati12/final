
import { configureStore } from "@reduxjs/toolkit";
import googleSlice from "./googleSlice";
import navBarSlice from "./navBarSlice";

export const store = configureStore({
    reducer : {
        toggle : navBarSlice,
        guser : googleSlice
    }
})
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    toggle : false,
    auth : false,
    login : false
}



const navBarSlice = createSlice({
    name : "nav",
    initialState,
    reducers : {
        setToggle(state,action) {
            state.toggle = action.payload
        },
        setAuth(state,action) {
            state.auth = action.payload
        },
        setLogin(state,action) {
            state.login = action.payload
        }
    }
})

export const {setToggle,setAuth,setLogin} = navBarSlice.actions


export default navBarSlice.reducer
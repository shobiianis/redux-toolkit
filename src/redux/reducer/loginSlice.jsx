import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:"Login",
    initialState:{
        dummyData:"testing",

    },
    reducers:{
        add(){

            //action here in term of function
        },
        del(){
           //action here in term of function
        }

    }
})

export const {add,del} =loginSlice.actions;
export default loginSlice.reducer;
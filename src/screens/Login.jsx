import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/reducer/loginSlice';
import { useNavigate } from "react-router-dom";

function Login() {

    const dispatch=useDispatch();
    const navigate = useNavigate();
    const updatedData=()=>{
    dispatch(
        add({
            newData:"teste done now data is updated "
        })
    )
    navigate('/') // yahan jese hi dispatch ka pay load chalega woh foran navigate kardega home page per jahan apka use selector se data console me dikh raha

  }

    return (
    <>
    <h1>Login</h1>
    <button onClick={updatedData} >Updated Data</button>
    </>
  )
}

export default Login
import React from "react";
import {  useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

function ProtectedAgent({children}) {
    const user = useSelector(selectLoggedInUser) 

    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    if(user && user.role!=='agent'){
        return <Navigate to='/' replace={true}></Navigate>
    }
    return children;
}
export default ProtectedAgent;
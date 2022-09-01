import React,{Navigate} from 'react'
import {Redirect} from 'react-router-dom'
function Protected({isLoggedin,children}) {

    if(!isLoggedin){
        return <Redirect to={"/"}></Redirect>;
    }
  return children;
}

export default Protected;
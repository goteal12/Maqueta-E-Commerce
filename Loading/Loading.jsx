import React from "react";
import { Spinner } from "react-bootstrap";
import './Loading.css';

function Loading ({children,loading}){
    if(loading){
        return(
   <div className="loading">
    <Spinner animation="border"/>
   </div>
        )
     }else{
        return (
          <>
          {children}
          </>
        )
     } 
    }
export default Loading
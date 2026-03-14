import React from "react";
import { useState, useEffect } from "react";
import {WindowSize} from "./window-size";
export default function Timer(){
    const [time, setTime]= useState(0);
    const [showWindow, setShowWindow]= useState(true);
    useEffect (()=>{
        console.log("effect called");
        function tick() {
            setTime((prevTime)=>prevTime + 1);   
        }
        let intervalid = setInterval(tick, 1000);
        //this function will get called when component is 
        // unmounnted

        return ()=>{
            console.log("clear called");
            clearInterval(intervalid)
        };
    },[]);
    return (
        <>
        <div>{time}</div>;{showWindow ?
        <WindowSize/>:null}
        <button onClick={()=>
            setShowWindow(false)}>Stop resize
        </button>
        </>
    );
}
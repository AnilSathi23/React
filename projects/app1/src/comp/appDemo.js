import React from "react";
import { useState } from "react";

function Data() {
    const [name, setName]= useState("Maria");
    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <h1>Name is {name}</h1>
        </div>
    )
}
export default Data;
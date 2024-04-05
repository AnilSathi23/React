import React, { useState } from "react";
import { ReactDOM } from "react-dom";

function MySampleForm(){
const [name , setName] = useState("");
const [skill , setSkill] = useState("");
const handleSubmit= (e) =>{
    e.preventDefault();
alert( `Your name is ${name}`);
}
const  onChangeInput=(e)=>{setSkill(e.target.value)};
    return(
        <form onSubmit={handleSubmit} >
            <label>Enter Your Name :</label>
            <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)}></input><br/><br/>
            <label>Enter Your Email :</label><input type="text" name="email"></input><br/><br/>
            <label>Enter Your contact  :</label><input type="text" name="contact"></input><br/><br/>

         <select value={skill} onChange={onChangeInput}>
            <option value="Java">Java </option>
            <option value="SpringBoot">SpringBoot </option>
            <option value="Microservice">Microservice </option>
         </select>
       <br/><br/>

            <input type="submit"></input>
        </form>
    )
}

export default MySampleForm;
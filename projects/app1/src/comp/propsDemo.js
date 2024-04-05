import React from "react";

function Tool({name, age, skill}){
    return (
        <div>
            <h2>Hi I am, {name} and my age is {age} and i have the following skill {skill}</h2>
        </div>
    )
}
Tool.defaultProps= {
    name:"Anil",
    age:40,
    skill:"React JS"
}

export default Tool;
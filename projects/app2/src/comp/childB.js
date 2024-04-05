import React from 'react';

function ChildComponentB({message, setMessage}){
    return(
        <div>
           <h2>Child Component B</h2>
            <p>{message}</p>
            <button onClick={()=> setMessage("Updated message from Child Component B")}>
                lets update the message</button>
        </div>
    )
}

export default ChildComponentB;
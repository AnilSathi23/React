import React from 'react';
import ChildComponentB from './childB';

function ChildComponentA({message,setMessage}){
    return(
        <div>
            <h2>Child Component A</h2>
            <p>{message}</p>
            <ChildComponentB message={message} setMessage={setMessage}/>
        </div>
    )
}

export default ChildComponentA;

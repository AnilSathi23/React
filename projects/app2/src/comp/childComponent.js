//The Context API is a built-in solution for sharing state across components without prop drilling. 
//It provides a way to create and manage a global state that any component can access. 
//This method is more scalable and easier to maintain in larger applications.
import React,{useContext} from 'react';
import {AppContext} from '../App';

function ChildComponent() {
    const {message,setMessage}=useContext(AppContext);
    //const [message,setMessage]=useContext(AppContext); both curley or square brackets can be used.
    return (
        <div>
            <h2>This is ChildComponent : </h2>
            <p>{message}</p>
            <button onClick={()=>setMessage("The message updated from Child")}>
                Call Message
            </button>
        </div>
    )
}

export default ChildComponent;
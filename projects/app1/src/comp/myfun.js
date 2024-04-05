import React from 'react';

function MyFun(props){
    const name=props.name;
    return(
        <div>
            <h1>Hello my functional component</h1>
            <h1>Hello, {name}</h1>
        </div>
    )
}
export default MyFun;
// import React from 'react';

// class MyComponent extends React.Component {

//     state = {value:1};
//     this.updateState=()=> this.setState({value:(this.state.value + 1 )});

//     render (){
//         retrun(
//             <div>
//                 <p>{this.state.value}</p>
//                 <button onClick={this.updateState}>increment value</button>
//             </div>
//         )
//     }

// }

import React, { Component } from 'react' 
export default class StateEx extends Component 
{ 
    state = { value : 1 }; 
    updateVal = () => this.setState({value : this.state.value + 1}) 
    render() {
         return ( 
         <div> 
            <h1>{this.state.value}</h1> 
            <button onClick={this.updateVal}>Increament</button> 
            </div> ) 
            } 
}
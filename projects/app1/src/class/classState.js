import React from 'react';
class MyComponet extends React.Component{
    constructor(props){
        super(props);
        this.state={brand:"Honda"};
    }
    changeBrand= () =>{
        this.setState({brand:"Toyota"});
    }
    render(){
        return(
            <div>
                <h1>My new Car {this.state.brand}</h1>
                <button onClick={this.changeBrand}>change brand</button>
            </div>
        )
    }
}

export default MyComponet;
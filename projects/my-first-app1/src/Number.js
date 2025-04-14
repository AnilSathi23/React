import React from "react";

class Number extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        if(this.props.number %2 == 0){
            return (
                <div>
                    {this.props.number}
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Number;

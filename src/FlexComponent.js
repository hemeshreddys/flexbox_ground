import React, { Component } from 'react';

class FlexComponent extends Component{
    render(){
        const flexChildContainer = {
            width : 100,
            height : 100,
            border : "1px solid white",
            backgroundColor : "black"
        }
        return(
        <div style={flexChildContainer}>
        
        </div>
        );
    }
}
export default FlexComponent;
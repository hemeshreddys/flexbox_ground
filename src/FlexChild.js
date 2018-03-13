import React, { Component } from 'react';
import FlexComponent from './FlexComponent';

class FlexChild extends Component{
    render(){
        const flexContainer = {
            display : 'flex',
            flexDirection : this.props.flexName,
            border : " 1px solid green",
            backgroundColor : "#D90429",
            flexWrap:"wrap"
        }
        return(
        <div style={flexContainer}>
          {this.props.items.map(item => (
              <FlexComponent key={item.id}/>
          ))}
        </div>
        );
    }
}
export default FlexChild;
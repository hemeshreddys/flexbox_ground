import React, { Component } from 'react';
import FlexChild from './FlexChild';
class FlexParent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {
      e.preventDefault();
      const newItem = {
        id: Date.now()
      }; 
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
      }));
    }
    render() {
      const button ={
        width:300,
        height:50,
        fontSize:20,
        cursor:"pointer"
      }
      return (
        <div>          
          <form onSubmit={this.handleSubmit}>    
            <button style={button}>
               <i class="material-icons">note_add</i>
              Add Flex Component{this.state.items.length + 0}
            </button>
           
          </form>
          <FlexChild items={this.state.items} flexName={this.props.cName}/>
        </div>

      );
    }

  }
  
export default FlexParent;
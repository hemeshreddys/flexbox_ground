import React, { Component } from 'react';
import FlexChild from './FlexChild';
class FlexParent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log("FlexParent constructor");
    } 
    componentWillMount(){
      console.log("FlexParent componentWillMount");
    }
    componentDidMount(){
      console.log("FlexParent componentDidMount");
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
      console.log("FlexParent render");
      const button ={
        width:60,
        height:60,
        fontSize:20,
        cursor:"pointer",
        borderRadius:10,
        outline: "none"
      }
      return (
        <div>          
          <form onSubmit={this.handleSubmit}>    
            <button style={button}>
            {this.state.items.length + 0}
              
            </button>
            
          </form>
          <FlexChild items={this.state.items} flexName={this.props.cName}/>
        </div>

      );
    }

  }
  
export default FlexParent;
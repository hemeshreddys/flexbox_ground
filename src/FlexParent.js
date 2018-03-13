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
        width:40,
        height:40,
        fontSize:20,
        cursor:"pointer",
        borderRadius:5,
        outline: "none",
        border:"none",
        margin:7,
        backgroundColor:"#2B2D42",
        color:"white"
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
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import FlexParent from './FlexParent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    console.log("App constructor");
  }
  componentWillMount(){
    console.log("App componentWillMount");
  }
  componentDidMount(){
    console.log("App componentDidMount");
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    console.log("App render");
    const buttonStyle = {
      height : 50,
      padding : 10,
      color:"#2B2D42"
    }
    return (
      <div>
        <Header/>  
        <i class="material-icons buttonSty" onClick={this.handleClick}>{this.state.isToggleOn ? 'view_module' : 'view_column'}</i>     
        <FlexParent cName={this.state.isToggleOn ? 'row' : 'column'} />
        <Footer/>
      </div>
    );
  }
}

export default App;

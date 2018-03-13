import React, {Component} from 'react';
class Header extends Component{
    render(){
        const headerStyle = {
            width : "100%",
            height: 50,
            backgroundColor : "#2B2D42",
            padding:20,
            boxSizing: "border-box",
            color:"white"

        }
        return(
            <div style={headerStyle}>
                Flexbox Playground 
            </div>
        );
    }
}
export default Header;
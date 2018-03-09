import React, {Component} from 'react';
class Footer extends Component{
    render(){
        const footerStyle = {
            width : "100%",
            height: 50,
            backgroundColor : "grey",
            padding:20,
            boxSizing: "border-box",
            color:"white"

        }
        return(
            <div style={footerStyle}>
                Flexbox Playground 
            </div>
        );
    }
}
export default Footer;
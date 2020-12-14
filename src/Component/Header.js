import React from 'react';
import '../CSS/Product.css';
import logo from '../Images/mindbodyLogo.png'
class Header extends React.Component{
    render(){
        const imageStyle = {position: "relative",height:"70px",left:"-490px"};
        return (
            <div className="HeaderCSS">
                <div>
                    <img style={imageStyle} src={logo} alt="Logo" />
                    <div className="FontClass">Cost Saver App!</div>
                </div>
            </div>
        )
    }
}

export default Header;
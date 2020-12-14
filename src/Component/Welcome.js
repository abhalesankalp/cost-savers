import React from 'react';
import '../CSS/Product.css';
import logo from '../Images/Welcome.JPG';
import data from '../DataFile/Location.json';
import DropDownComponent from '../Component/DropDownComponent';
import { Button } from 'react-bootstrap';
class Welcome extends React.Component{
    render(){
        console.log(data);
        const imageStyle = {position: "relative",height:"300px",left:"330px", top:"-6px"};
        const divStyle = {background: "white", position: "relative", top: "48px", height: "416px", width: "90%", left: "51px"};
        return (
            <div className="PredictForLocation">
                <div style={divStyle}>
                    <div className="TitleCss">Save Your Inventory Storage Cost</div>
                    <div className="SubTitleCss">Get Estimations.. Order.. Increase Profit</div>
                    <div className="SelectLocationCss">Select Location</div>
                    <div><img style={imageStyle} src={logo} alt="Logo" /></div>
                    <div><Button onClick = {this.props.handler} className="MySubmitButton" type="button">Go</Button></div>
                    <DropDownComponent list={[{value: 1, label: 'Slo, New York, USA'}, {value: 2, label:'Pune, Maharashtra, India'}]} />
                </div>
            </div>
        )
    }
}

export default Welcome;
import React from 'react';
import '../CSS/Product.css';
import Button from 'react-bootstrap/Button';
import GridJS from './Grid';
import FilterGrid from './Formatter.js/FilterGrid';
class PreditcForLocation extends React.Component{
    state={
        
    }
    Locations = [
        { text: 'Slo', id: 1 },
        { text: 'Pune', id: 2 }, 
    ];
    render(){
        let btnClass = [
            'button',
            'button1'
          ]
          btnClass = btnClass.join(' ');
        return (
            <div className="PredictForLocation">
                <div className="TempDiv">
                    <FilterGrid/>
                </div>
            </div>
        )
    }
}

export default PreditcForLocation;
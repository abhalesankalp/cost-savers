import React from 'react';
import '../CSS/Product.css';
import Button from 'react-bootstrap/Button'
class PreditcForCategory extends React.Component{
    state={
        
    }
    Products = [
        { text: 'ABB CURL SH 250ML', id: 1 },
        { text: 'ABB GENTLE SH 250ML', id: 2 }, 
        { text: 'AHV .5 ADV FOOT CREAM', id: 3 }
    ];
    render(){
        let btnClass = [
            'button',
            'button1'
          ]
          btnClass = btnClass.join(' ');
        return (
            <div className="PredictForCategory">
                <div>Predict Product Count For Specific Product </div>
                <br/>
                <div>Please select product</div>
                <select>
                    {this.Products.map((product) => <option key={product.id} value={product.id}>{product.text}</option>)}
                </select>
                <Button className={btnClass} variant="success">Submit</Button>
            </div>
        )
    }
}

export default PreditcForCategory;
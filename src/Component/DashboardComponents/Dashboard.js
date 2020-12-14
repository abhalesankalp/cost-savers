import React from 'react';
import '../../CSS/Product.css';
import HeaderComponent from './HeaderComponent';
import ProductComponent from './ProductComponent';
import ProductDetailsComponent from './ProductDetailsComponent';
import Result from '../../DataFile/RD.json';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {selectedComponent:0,ProductInventoryQuantity:-2,allProductQuantity:null, TotalProductInventoryQuantityCost:0};
        this.setProductForProductDetails =  this.setProductForProductDetails.bind(this);
    }

    setProductForProductDetails(componentID, inventoryQuantity, allProductQuantity) {
        this.setState({
            selectedComponent: componentID,
            ProductInventoryQuantity: allProductQuantity[componentID],
        })

        if(this.state.allProductQuantity!=0)
        {
            this.setState({
                allProductQuantity:allProductQuantity
            })

            var TotalProductInventoryQuantityCost = 0;
            Result.forEach((element,key) => {
               TotalProductInventoryQuantityCost += parseFloat((parseFloat(allProductQuantity[key])-parseFloat(element.AverageSales))*parseFloat(element.BuyPrice));
            });

            this.setState({
                TotalProductInventoryQuantityCost:TotalProductInventoryQuantityCost
            })
        }
    }

   
    render(){
        const items = []
        var TotalProductInventoryQuantityCost = 0;
        var ETR = 0;
        var count = 0;
        var productQuantity = this.state.productQuantity?? new Array();
        Result.forEach((element,key) => {
            ETR += parseFloat((element.COGS/element.Inventory));
            count+=1;
            productQuantity[key] = element.Inventory; 
           items.push(<ProductComponent product={element} elementID = {key} allProductQuantity={productQuantity} setProductForProductDetails = {this.setProductForProductDetails.bind(this)} OriginalQuantityProducts = {Result[key].Inventory}/>);
           TotalProductInventoryQuantityCost += parseFloat((parseFloat(productQuantity[key])-parseFloat(element.AverageSales))*parseFloat(element.BuyPrice));
        });

       
        ETR = (ETR/count).toFixed(2);
        
        if(this.state.ProductInventoryQuantity==-2)
        {
            this.setState({ProductInventoryQuantity:Result[0].Inventory});
            this.setState({TotalProductInventoryQuantityCost:TotalProductInventoryQuantityCost});
        }

        return(
            <div className="PredictForLocation">
                <HeaderComponent totalSale={Result[0].TotalSales.toFixed(2)} TotalProductInventoryQuantityCost={this.state.TotalProductInventoryQuantityCost.toFixed(2)} TurnOverRation={ETR} CostSaved={(this.state.TotalProductInventoryQuantityCost*0.25).toFixed(2)}/>
                <div className="itemDiv scrollbar scrollbar-primary  mt-5 mx-auto">
                    {items}
                </div>
                <ProductDetailsComponent product={Result[this.state.selectedComponent]} ProductInventoryQuantity={this.state.ProductInventoryQuantity} TotalProductInventoryQuantityCost={this.state.TotalProductInventoryQuantityCost.toFixed(2)}/>
            </div>
        );
    }
}

export default Dashboard;
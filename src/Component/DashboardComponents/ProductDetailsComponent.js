import React from 'react';
import '../../CSS/Product.css';
import { PieChart } from 'react-minimal-pie-chart';
import FivePercent from '../../Images/FivePercent.png';
import TenPercent from '../../Images/TenPercent.png';
import SaleFivePercent from '../../Images/SalesFivePercent.png';
import SaleTenPercent from '../../Images/SalesSevenPercent.png';


class ProductDetailsComponent extends React.Component{
    render(){
        var icc = ((this.props.ProductInventoryQuantity-this.props.product.AverageSales)*this.props.product.BuyPrice).toFixed(2);
        var  pic = this.props.TotalProductInventoryQuantityCost;
        console.log(icc);
        console.log(pic);
        return(
            <div className="ProductDetailsDiv scrollbar scrollbar-primary  mt-5 mx-auto">
                <div className="ProductDetailsTitle">Product Inventory Details</div>
                <div className="ProductEfiiciencyDetails">
                    <table>
                    <tr>
                        <td className="ProductEfiiciencyDetailsTd">
                            <div className="ProductEfiiciencyDetailsValue">${this.props.product.Margin}</div><div className="EfficiencyTitle">Profit Margin</div>
                        </td>
                        <td className="ProductEfiiciencyDetailsTd">
                            <div className="ProductEfiiciencyDetailsValue">{(this.props.product.BuyPrice/this.props.product.COGS*this.props.ProductInventoryQuantity).toFixed(0)}</div><div className="EfficiencyTitle">Estimated Days to Sell</div>
                        </td>
                        <td className="ProductEfiiciencyDetailsTd">
                            <div className="ProductEfiiciencyDetailsValue">${((this.props.ProductInventoryQuantity-this.props.product.AverageSales)*this.props.product.BuyPrice).toFixed(2)}</div><div className="EfficiencyTitle">Inventory Carrying Cost</div>
                        </td>
                        </tr>
                        <tr>
                        <td className="ProductEfiiciencyDetailsTd">
                            <div className="ProductEfiiciencyDetailsValue">${this.props.product.COGS.toFixed(2)}</div><div className="EfficiencyTitle">COGS</div>
                        </td>
                        <td className="ProductEfiiciencyDetailsTd">
                            <div className="ProductEfiiciencyDetailsValue">${(this.props.product.SalesForThisProduct).toFixed(2)}</div><div className="EfficiencyTitle">Total Sales (Month)</div>
                        </td>
                        <td className="ProductEfiiciencyDetailsTd">
                            <div className="ProductEfiiciencyDetailsValue">{(this.props.product.COGS/this.props.product.Inventory).toFixed(2)}</div><div>Inventory Turnover Ratio</div>
                        </td>
                    </tr>
                    </table>
                </div>
                <div className="chartOne">
                        {parseInt(this.props.ProductInventoryQuantity)%2==0?
                      <img className="chartImageOneEven" src={FivePercent} />:
                      <img className="chartImageOne" src={TenPercent} />}
                </div>
                <div className="chartTwo">
                    {parseInt(this.props.ProductInventoryQuantity)%2==0?
                      <img className="chartImageTwoEven" src={SaleTenPercent} />:
                      <img className="chartImageTwo" src={SaleFivePercent} />}
                </div>
            </div>
        )
    }
}

export default ProductDetailsComponent;
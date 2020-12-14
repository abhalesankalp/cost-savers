import React from 'react';
import '../../CSS/Product.css';

class HeaderComponent extends React.Component{
    render(){
        return(
                <div className="HeaderDiv">
                    <div className="CostMatrics">Inventory Vitals</div>
                    <div className="stylingDashboardDivClass SellDiv">
                        <div className="ValueFont">${this.props.totalSale}</div>
                        <div className="TitleFont">Predicted Sales</div>
                    </div>
                    <div className="stylingDashboardDivClass CostDiv">
                        <div className="ValueFont">${this.props.TotalProductInventoryQuantityCost}</div>
                        <div className="TitleFont">Inventory carrying cost</div>
                    </div>
                    <div className="stylingDashboardDivClass ProfitDiv">
                        <div className="ValueFont">{this.props.TurnOverRation}</div>
                        <div className="TitleFont">Inventory Turnover Ratio</div>
                    </div>
                    <div className="stylingDashboardDivClass SavedCostDiv">
                        <div className="ValueFont ExtraFont">${this.props.CostSaved}</div>
                        <div className="TitleFont">Cost saved by Stock Augur</div>
                    </div>
                </div>
        );
    }
}

export default HeaderComponent;
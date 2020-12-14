import React from 'react';
import '../../CSS/Product.css';
import bottle from '../../Images/bottle.png'
import mat from '../../Images/mat.png'
import cream from '../../Images/cream.png'
import tshirt from '../../Images/Tshirt.png'

class ProductComponent extends React.Component{
    constructor(){
        super();
        this.DivRef = React.createRef();
        this.UpdateBackground = this.UpdateBackground.bind(this);
        this.RemoveBackground = this.RemoveBackground.bind(this);
        this.MakeEditable = this.MakeEditable.bind(this);
        this.HideTextbox = this.HideTextbox.bind(this);
        this.state = {isClicked:false, isQuantityEditable:false, ProductQuantity:-2, AllProductQuantity:0}
    }

    UpdateBackground(){
        this.setState({isClicked:true})
    }

    RemoveBackground(){
        this.setState({isClicked:false})
    }

    MakeEditable(){
        this.setState({isQuantityEditable:true})
    }

    componentWillReceiveProps(){ //this is called to before render method
        this.setState({
           ProductQuantity:this.props.product.Inventory
         })
    }

    componentDidMount() {
       
      }

      TextState(evt){
        alert(evt.target.value);
      }

      
    HideTextbox(evt){
        
        var temp = this.state.allProductQuantity==undefined?this.props.allProductQuantity:this.state.allProductQuantity;
        if(temp){
            temp[this.props.elementID] = evt.target.value;
            this.setState({ AllProductQuantity: temp }); 
            this.setState({ ProductQuantity: temp[this.props.elementID]});
            this.setState({isQuantityEditable:!this.state.isQuantityEditable});
            this.props.setProductForProductDetails(this.props.elementID, this.state.ProductQuantity,this.state.AllProductQuantity??0)
        }
    }
    render(){
        if(this.state.ProductQuantity==-2)
        {
            this.setState({ProductQuantity:this.props.product.Inventory})
            this.setState({AllProductQuantity:this.props.allProductQuantity})
        }
        
        var imgSrc;
        var cased = parseInt(this.props.elementID%4)+1;
        switch(cased)
        {
            case 1:imgSrc = bottle;break;
            case 2:imgSrc = mat; break;
            case 3:imgSrc = tshirt; break;
            case 4:imgSrc = cream; break;
        }

        console.log(imgSrc);
        return(
            <div className={"ProductDiv " + (this.state.isClicked ? 'ChangeBackGfround' : '')} onMouseEnter ={this.UpdateBackground} onMouseLeave={this.RemoveBackground} onClick={()=>this.props.setProductForProductDetails(this.props.elementID, this.state.ProductQuantity,this.state.AllProductQuantity??0)}>
                <div className="ProductImage"><img src={imgSrc}/></div>
                <div className="ProductDetails">
                    <div className="ProductName">{this.props.product.ProductName}</div>
                    <div className="ProductInfo">{this.props.product.ProductName}</div>
                    <div className="ProductID">{this.props.product.ProductID}</div>
                </div>
                <div className={"PredictedQuantity " + (this.state.isClicked ? 'ChangeBacfkGround' : '')} onClick = {this.MakeEditable} onMouseEnter ={this.UpdateBackground} onMouseLeave={this.RemoveBackground}><div className="PRQuant">Recommended</div><div>{this.props.OriginalQuantityProducts}</div></div>
                <div className={"ProductQuantity " + (this.state.isClicked ? 'ChangeBackGfround' : '')} onClick = {this.MakeEditable} onMouseEnter ={this.UpdateBackground} onMouseLeave={this.RemoveBackground}>
                        {this.state.isQuantityEditable? 
                        <div >
                            <input type="text" className ="EditableQuantity" defaultValue ={this.state.AllProductQuantity[this.props.elementID]} onBlur={this.HideTextbox}></input>
                        </div>:<div ref={this.DivRef}>{Math.ceil(this.state.AllProductQuantity[this.props.elementID])}</div>}
                </div>
            </div>
        )
    }
}

export default ProductComponent;
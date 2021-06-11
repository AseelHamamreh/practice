import React, { Component } from 'react';

export class CartComp extends Component {
  render() {
    console.log(this.props.cartData);
    return (
      this.props.cartData.map(data=>{
        return <>
          <img src={data.img} alt={data.name}/>
          <h5>{data.name}</h5>
          <p>{data.price} $</p>
          <button onClick ={()=>this.props.removeItem(data.slug)}>Remove From Cart</button>
        </>;
      })
    );
  }
}

export default CartComp;

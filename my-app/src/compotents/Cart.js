import React, { Component } from 'react';
import CartComp from './CartComp';

const axios = require('axios').default;

export class Cart extends Component {
  constructor(props){
    super(props);
    this.state={
      brand:'',
      type:'',
      cartData:[],
      showCartData:false
    };
  }

componentDidMount = async()=>{
  const newData = await axios.get('http://localhost:3001/cart');
  this.setState({
    cartData:newData.data,
    showCartData:true
  });
  console.log(this.state.cartData);
}

removeItem=async(slug)=>{
  const newData = await axios.delete(`http://localhost:3001/cart${slug}`);
  this.setState({
    newData:newData.data,
  });
}
render() {
  return (
    <div>
      {this.state.showCartData &&
      <CartComp cartData={this.state.cartData}
        removeItem={this.removeItem}/>}
    </div>
  );
}
}

export default Cart;

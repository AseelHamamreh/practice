import React, { Component } from 'react';
import WishListData from './WishListData';

const axios = require('axios').default;

export class WishList extends Component {
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
      <WishListData cartData={this.state.cartData}
        removeItem={this.removeItem}/>}
    </div>
  );
}
}

export default WishList;

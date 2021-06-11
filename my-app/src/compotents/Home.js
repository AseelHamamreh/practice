import React, { Component } from 'react';
import MyForm from './MyForm';
import Data from './Data';

const axios = require('axios').default;

export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      showData:false,
      brand:'',
      type:'',
      cartData:[],
      showCartData:false
    };
  }
changeBrand=(e)=>{
  this.setState({brand:e.target.value});
}

changeType=(e)=>{
  this.setState({type:e.target.value});
}

showResults = async (e)=>{
  e.preventDefault();
  const myData = await axios.get(`http://localhost:3001/data?brand=${this.state.brand}&product_type=${this.state.type}`);
  this.setState({
    data:myData.data,
    showData:true,
  });
  console.log(myData.data);
}

saveInDB = async(data)=>{
  const reqBody = data;
  const newData = await axios.post('http://localhost:3001/cart',reqBody);
  this.setState({
    cartData:newData.data,
    showCartData:true
  });
  console.log(newData.data);
}

render() {
  return (
    <div>
      <MyForm changeBrand={this.changeBrand}
        changeType={this.changeType}
        showResults={this.showResults}/>
      {this.state.showData &&
      <Data data={this.state.data}
        saveInDB={this.saveInDB}/>}
    </div>
  );
}
}

export default Home;

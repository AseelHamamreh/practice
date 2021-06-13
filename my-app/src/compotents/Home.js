import React, { Component } from 'react';
// import MyForm from './MyForm';
import Data from './Data';
// import TopData from './TopData';
// import Test from './Test';
import Footer from './Footer';
import Main from './Main';
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
      showCartData:false,
      topRatedData:[],
      showTop:false,
    };
  }
changeBrand=(e)=>{
  this.setState({brand:e.target.value});
}

changeType=(alt)=>{
  console.log(alt);
  this.setState({type:alt});
}

// componentDidMount = async ()=>{
//   const myData = await axios.get(`http://localhost:3001/rated`);
//   const newData = myData.data;
//   this.setState({
//     topRatedData:newData,
//     showTop:true,
//   });
//   console.log(this.state.topRatedData);
// }

showResults = async (e)=>{
  e.preventDefault();
  const myData = await axios.get(`http://localhost:3001/data?product_type=${this.state.type}`);
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
      {/* {this.state.showTop && <Test topRatedData ={this.state.topRatedData}/>} */}
      {/* <MyForm changeBrand={this.changeBrand} */}
      {/* // changeType={this.changeType} */}
      {/* showResults={this.showResults}/> */}
      <Main changeType={this.changeType}
        showResults={this.showResults}/>
      {this.state.showData &&
      <Data data={this.state.data}
        saveInDB={this.saveInDB}/>}
      <Footer/>
    </div>
  );
}
}

export default Home;

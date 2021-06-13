import React, { Component } from 'react';

export class TopData extends Component {
  render() {
    console.log(this.props.topRatedData);
    return(
      this.props.topRatedData.map((data,idx)=>{
        if(idx>25 && idx< 50){
          return <>
            <h1>{data.name}</h1>
            <img src={data.img} alt=''/>
            <p>{data.price} $</p>
          </>;
        }
      })
    );
  }
}

export default TopData;

import React, { Component } from 'react';

export class Data extends Component {
  render() {
    return (
      this.props.data.map(data=>{
        return <>
          <img src={data.img} alt={data.name}/>
          <h5>{data.name}</h5>
          <p>{data.price} $</p>
          <button onClick={()=>this.props.saveInDB(data)}>Add to Cart</button>
        </>;
      })
    );
  }
}

export default Data;

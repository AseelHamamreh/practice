import React, { Component } from 'react';

export class MyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.props.showResults(e)}>
          <legend>Search For Your Favorite Brand!</legend>
          <label>Brand:</label>
          <input type='text' onChange={(e)=>this.props.changeBrand(e)}/>
          <label>Type:</label>
          <input type='text' onChange={(e)=>this.props.changeType(e)}/>
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

export default MyForm;

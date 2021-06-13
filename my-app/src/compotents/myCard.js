import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class myCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.price}</Card.Text>
            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default myCard;

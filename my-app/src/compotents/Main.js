import React, { Component } from 'react';
import './Main.css';
import blush from './images/blush.jpg';
import foundationn from './images/foundationn.jpg';
import mascara from './images/mascara.jpg';
import brow from './images/brow.jpg';
import eyeliner from './images/eyeliner.jpg';
import eyeshadow from './images/eyeShadow.jpg';
import lipLiner from './images/lipLiner.jpg';
import lipstick from './images/lipstick.jpg';
import nailPolish from './images/nailPolish.jpg';
export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      myAlt:''
    };
  }
  render() {
    return (
      <div >
        <div id='first' style={{backgroundColor:'#f9f3f3'}}>
          <div id ="secOrder">
          </div>
          <img src={blush} alt='blush' />
          <h1 id='firstImage' onClick={(e)=>{this.props.changeType('blush');this.props.showResults(e);}}>Blush</h1>
          <img src={foundationn} alt='' />
          <h1 id='secondImage' onClick={(e)=>{this.props.changeType('foundation');this.props.showResults(e);}} >Foundation</h1>
          <img src={mascara} alt='' />
          <h1 id='thirdImage' onClick={(e)=>{this.props.changeType('Mascara');this.props.showResults(e);}}>Mascara</h1>
        </div>
        <div id='second'>
          <img src={brow} alt='' />
          <h1 id='forthImage' onClick={(e)=>{this.props.changeType('Eyebrow');this.props.showResults(e);}}>Eyebrow</h1>
          <img src={eyeliner} alt='' />
          <h1 id='five' onClick={(e)=>{this.props.changeType('Eyeliner');this.props.showResults(e);}}>Eyeliner</h1>
          <img src={eyeshadow} alt='' />
          <h1 id='six' onClick={(e)=>{this.props.changeType('Eyeshadow');this.props.showResults(e);}}>Eyeshadow</h1>
        </div>
        <div id='third'>
          <img src={lipLiner} alt='' />
          <h1 id='seven' onClick={(e)=>{this.props.changeType('Lip liner');this.props.showResults(e);}}>Lip liner</h1>
          <img src={lipstick} alt='' />
          <h1 id='eight' onClick={(e)=>{this.props.changeType('Lipstick');this.props.showResults(e);}}>Lipstick</h1>
          <img src={nailPolish} alt='' />
          <h1 id='nine' onClick={(e)=>{this.props.changeType('Nail polish'); this.props.showResults(e);}}>Nail polish</h1>
        </div>
      </div>
    );
  }
}

export default Main;

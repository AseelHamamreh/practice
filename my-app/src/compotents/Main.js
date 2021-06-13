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
      <div style={{backgroundColor:'#f9f3f3'}}>
        <h1 style={{textAlign:'center',paddingTop:'70px'}}>Shop Now!</h1>
        <div id='first'>
          <img src={blush} alt='blush' onClick={(e)=>this.props.changeType('blush')}/>
          {/* <h1 id='firstImage'>Blush</h1> */}
          <img src={foundationn} alt='' onClick={(e)=>this.props.changeType('foundation')}/>
          {/* <h1 id='secondImage' >Foundation</h1> */}
          <img src={mascara} alt='' onClick={(e)=>this.props.changeType('Mascara')}/>
          {/* <h1 >Mascara</h1> */}
        </div>
        <div id='second'>
          <img src={brow} alt='' onClick={(e)=>this.props.changeType('Eyebrow')}/>
          {/* <h1>Eyebrow</h1> */}
          <img src={eyeliner} alt='' onClick={(e)=>this.props.changeType('Eyeliner')}/>
          {/* <h1>Eyeliner</h1> */}
          <img src={eyeshadow} alt='' onClick={(e)=>this.props.changeType('Eyeshadow')}/>
          {/* <h1>Eyeshadow</h1> */}
        </div>
        <div id='third'>
          <img src={lipLiner} alt='' onClick={(e)=>this.props.changeType('Lip liner')}/>
          {/* <h1>Lip liner</h1> */}
          <img src={lipstick} alt='' onClick={(e)=>this.props.changeType('Lipstick')}/>
          {/* <h1>Lipstick</h1> */}
          <img src={nailPolish} alt='' onClick={(e)=>this.props.changeType('Nail polish')}/>
          {/* <h1 id='test'>Nail polish</h1> */}
          <button onClick={(e)=>this.props.showResults(e)}>show</button>

        </div>
      </div>
    );
  }
}

export default Main;

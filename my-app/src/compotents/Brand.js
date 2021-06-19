import React, { Component } from 'react';

export class Brand extends Component {
  render() {
    const array =['almay',
      'alva',
      'annabelle',
      'benefit',
      'boosh',
      'butter london',
      'cargo cosmetics',
      'china glaze',
      'clinique',
      'coastal classic creation',
      'colourpop',
      'covergirl',
      'dalish',
      'deciem',
      'dior',
      'dr. hauschka',
      'e.l.f.',
      'essie',
      'fenty',
      'glossier',
      'green people',
      'iman',
      'lotus cosmetics usa',
      'marcelle',
      'marienatie',
      'maybelline',
      'milani',
      'mineral fusion',
      'misa',
      'mistura',
      'moov',
      'nudus',
      'nyx',
      'orly',
      'pacifica',
      'penny lane organics',
      'physicians formula',
      'piggy paint',
      'pure anada',
      'rejuva minerals',
      'revlon',
      'salon perfect',
      'sante',
      'sinful colours',
      'smashbox',
      'stila',
      'suncoat',
      'w3llpeople',
      'wet n wild',
      'zorah',
      'zorah biocosmetiques'];
    return (
      <div>
        <select style={{marginLeft:'43%',marginTop:'30px'}} onChange={(e)=> this.props.showBrandResults(e)}>
          {array.map(data=>{
            return <>
              <option value={data}>{data}</option>
              {/* <h5 style={{cursor:'pointer'}} onClick={(e)=> this.props.showBrandResults(e,data)}>{data}</h5> */}
            </>;
          })}
        </select>
      </div>
    );
  }
}

export default Brand;

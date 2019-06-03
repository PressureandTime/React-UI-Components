import React from 'react';
import './Card.css';
import { tsPropertySignature } from '@babel/types';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';


function CardContainer() {

  // function onItemClick(){
  //     console.log('It was clicked');
  //     window.addEventListener('load' , ()=> {

  //     });
  // }

  return (
    <div className="card-Container">
      <CardBanner />
      <CardContent />
    </div>
  );
}


export default CardContainer;

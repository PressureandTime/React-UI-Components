import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
  
    return(
   <div className="display">
       <p>{props.result}</p>
   </div>
    )

}


export default CalculatorDisplay

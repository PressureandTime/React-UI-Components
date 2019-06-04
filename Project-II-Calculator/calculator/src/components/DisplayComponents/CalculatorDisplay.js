import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
  
    return(
   <div className="display">
       {/* <input type="text" name="display"/> */}
       <p>{props.result}</p>
   </div>
    )

}


export default CalculatorDisplay

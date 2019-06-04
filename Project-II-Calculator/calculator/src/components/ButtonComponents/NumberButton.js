import React from 'react';
import './Button.css';


function NumberButton(props){
    return(
        <div className="number-wrapper">
            
            <input type="button" value="7" onClick={()=> props.text(7)}/>
            <input type="button" value="8" onClick={()=> props.text(8)}/>
            <input type="button" value="9" onClick={()=> props.text(9)}/>
            <input type="button" value="x" onClick={()=> props.text("x")}/><br/>
            <input type="button" value="4" onClick={()=> props.text(4)}/>
            <input type="button" value="5" onClick={()=> props.text(5)}/>
            <input type="button" value="6" onClick={()=> props.text(6)}/>
            <input type="button" value="-" onClick={()=> props.text("-")}/><br/>
            <input type="button" value="1" onClick={()=> props.text(1)}/>
            <input type="button" value="2" onClick={()=> props.text(2)}/>
            <input type="button" value="3" onClick={()=> props.text(3)}/>
            <input type="button" value="+" onClick={()=> props.text("+")}/><br/>
            <input type="button" value="0" onClick={()=> props.text(0)}/>
            <input type="button" value="=" onClick={()=> props.text("=")}/>
        </div>
    )
}


export default NumberButton
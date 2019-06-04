import React from 'react';
import './Button.css';

function ActionButton(props){
    return(
       <div className="action">
            
           <input type="button" value="clear" onClick={()=>props.clear()}/>
           <input type="button" value="÷" onClick={()=> props.division("÷")}/>
           
           
       </div>
    )
}


export default ActionButton

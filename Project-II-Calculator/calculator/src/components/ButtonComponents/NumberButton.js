import React from 'react';
import './Button.css';


function NumberButton(props){
    return(
        <div>
            
            <input type="button" value="7"/>
            <input type="button" value="8"/>
            <input type="button" value="9"/>
            <input type="button" value="x"/><br/>
            <input type="button" value="4"/>
            <input type="button" value="5"/>
            <input type="button" value="6"/>
            <input type="button" value="-"/><br/>
            <input type="button" value="1"/>
            <input type="button" value="2"/>
            <input type="button" value="3"/>
            <input type="button" value="+"/><br/>
            <input type="button" value="0"/>
            <input type="button" value="="/>
        </div>
    )
}


export default NumberButton
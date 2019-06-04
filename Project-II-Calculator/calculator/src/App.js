import React, {Component} from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends Component{
  state = {
    displayResult: '0',
  
  }
  changeResult = (val) =>{
    this.setState({displayResult: val})
  }
  clearResult = () =>{
    this.setState({displayResult: '0'})
  }
 render(){
  return (
    <div>
    <CalculatorDisplay result={this.state.displayResult}/>
    <ActionButton division={this.changeResult} clear={this.clearResult}/>
     <NumberButton text={this.changeResult}/>
    </div>
  );
};
}

export default App;

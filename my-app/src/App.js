import React from 'react';
import './App.css';
import Grid from './Grid';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGrid1: 'show',
      showGrid2: 'show',
      showGrid3: 'show',
      showGrid4: 'show',
    };
  }
  handleClick = (buttonId) => {
      const stateValue = this.state[`showGrid${buttonId}`] === 'show' ? 'hide' : 'show';
      this.setState({
       [`showGrid${buttonId}`]: stateValue
      });
  }
  render(){
  return (
    <div className="App">
        <Grid id="grid1" handleClick={this.handleClick} toggle={this.state.showGrid1}/>
        <Grid id="grid2" handleClick={this.handleClick} toggle={this.state.showGrid2}/>
        <Grid id="grid3" handleClick={this.handleClick} toggle={this.state.showGrid3}/>
        <Grid id="grid4" handleClick={this.handleClick} toggle={this.state.showGrid4}/>
    </div>
  );
  }
 }

export default App;

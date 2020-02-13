import React from 'react';
import './App.css';

class ButtonComponent extends React.Component {
    handleButtonClick = () => {
        this.props.handleClick(this.props.name)
    }
    render(){
        return(
            <>
            <button onClick={this.handleButtonClick} className="Button"> {this.props.name}</button>
            </>
        )
    }
}

export default ButtonComponent;
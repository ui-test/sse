import React from 'react';
import classnames from 'classnames';
import ButtonComponent from './Button';
import './App.css';

class Grid extends React.Component{
    render(){
        return(
            <>
                <div className={classnames('Grid', this.props.toggle, this.props.id)}>
                    <ButtonComponent name="1" {...this.props}/>
                    <ButtonComponent name="2" {...this.props}/>
                    <ButtonComponent name="3" {...this.props}/>
                    <ButtonComponent name="4" {...this.props}/>
                    <p className="gridName">{this.props.id}</p>
                </div>
            </>
        )
    }
}


export default Grid;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Light from './Light';
import { turnLightsToRed, turnLightsToYellow, turnLightsToGreen } from './actions/lights';

class Frame extends Component {
  render() {
    return(
      <div>
        <Light color="red"/>
        <Light color="yellow"/>
        <Light color="green"/>

        <button onClick={this.props.turnToRed}>Sémaforo en Rojo</button>
        <button onClick={this.props.turnToYellow}>Sémaforo en Amariillo</button>
        <button onClick={this.props.turnToGreen}>Sémaforo en Verde</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    turnToRed: turnLightsToRed(dispatch),
    turnToYellow: turnLightsToYellow(dispatch),
    turnToGreen: turnLightsToGreen(dispatch),
  }
}
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Frame)
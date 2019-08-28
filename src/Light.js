import React, { Component } from 'react';
import {connect} from 'react-redux';

class Light extends Component {
  render() {
    return (
      <div style={{
        borderRadius: 40,
        height: 80,
        width: 80,
        backgroundColor: this.props.lights[this.props.color] ? this.props.color : 'grey'
      }}>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      ...state
    }
  }



export default connect(
  mapStateToProps
)(Light);
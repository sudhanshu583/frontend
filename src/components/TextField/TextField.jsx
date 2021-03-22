import React, { Component } from 'react';
import  './style';
class TextField extends Component {
 
  render() {
    return(
      <div className="input-wrap">
        <label>{this.props.labelName}</label>
        <input type="text" value={this.props.valueText} className={this.props.errorTxt ? 'red-border' : ''} disabled={this.props.disProps} />
        <p className="error-txt">{this.props.errorTxt}</p>
      </div>
    );
  }
  
}
export default TextField;
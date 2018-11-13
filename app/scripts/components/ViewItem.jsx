import React from 'react';
import PropTypes from 'prop-types';

import { STATUS } from 'constants/index';


export default class ViewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
  };

  handleActionType = () =>{
    this.props.handleActionType(STATUS.EDIT);
  }

  render() {
    return (
      <div key="ViewItem" className="app__view-item">

          <h1>{this.props.item.name}</h1>
          <div onClick={this.handleActionType}>Edit this</div>

          <span>Description</span>
          <p>{this.props.item.description}</p>

          <span>Type</span>
          <p>{this.props.item.type}</p>

          <span>Sensitivity</span>
          <p>{this.props.item.sensitivity.description}</p>

          <table>
            <thead>
              <tr><th>Possible Values</th></tr>
              <tr>
                <th>Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.item.values
                .map(v => (
                  <tr key={v.key}>
                    <td>{v.value}</td>
                    <td>{v.description}</td>
                  </tr>
              ))}
            </tbody>
          </table>

      </div>
    );
  }
}

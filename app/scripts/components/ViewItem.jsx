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
      <div key="ViewItem" className="app__view-item app__table">
          <div className="row">
            <div className="col-md-4">
              <h4>{this.props.item.name}</h4>
            </div>
            <div className="col-md-4 ml-auto">
              <button onClick={this.handleActionType}>Edit this</button>
            </div>
          </div>

          <div className="detail">
            <label>Description</label>
            <p>{this.props.item.description}</p>
          </div>


          <div className="detail">
            <label>Type</label>
            <p>{this.props.item.type}</p>
          </div>

          <div className="detail">
            <label>Sensitivity</label>
            <p>{this.props.item.sensitivity.description}</p>
          </div>

          <table>
            <thead>
              <tr><th className="__primary__title" colSpan="2">Possible Values</th></tr>
              <tr className="__secondary__title">
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

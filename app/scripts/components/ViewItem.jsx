import React from 'react';
import PropTypes from 'prop-types';

export default class ViewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("item selected");
  };

  render() {
    return (
      <div key="ViewItem" className="app__view-item">
          <h1>{this.props.item.name}</h1>

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

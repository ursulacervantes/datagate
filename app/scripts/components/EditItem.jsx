import React from 'react';
import PropTypes from 'prop-types';

export default class EditItem extends React.Component {

  static propTypes = {
    item: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("item selected");
  };

  onInputChange = (e) => {
    console.log("input has changed");
  }

  render() {
    return (
      <div key="EditItem" className="app__view-item">

          <span>Key name</span>
          <input value={this.props.item.name} onChange={this.onInputChange}></input>

          <span>Description</span>
          <input value={this.props.item.description} onChange={this.onInputChange}></input>

          <span>Type</span>
          <input value={this.props.item.type} onChange={this.onInputChange}></input>

          <input type="checkbox" checked={this.props.item.sensitivity.checked} onChange={this.onInputChange}></input>

          <p>Is this personal data?</p>

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

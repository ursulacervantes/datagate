import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editItem } from 'actions';
import { STATUS } from 'constants/index';

export default class EditItem extends React.Component {

  static propTypes = {
    item: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      item: {
        description: '',
        id: '',
        name: '',
        sensitivity: true,
        type: '',
        values: []
      }
    };
  }

  componentDidMount() {
    this.setState({ item: this.props.item });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item !== this.state.item) {
      this.setState({ item: nextProps.item });
    }
  }

  onInputChange = (e) => {
    const item = {
      ...this.state.item,
      [e.target.id]: e.target.id === 'sensitivity' ?
          e.target.checked : e.target.value,
    }

    this.setState({
      item,
    });
  }

  handleActionType = () => {
    this.props.editItem(this.state.item);
    this.props.handleActionType(STATUS.VIEW);
  }

  render() {
    return (
      <div key="EditItem" className="app__view-item app__table">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="name">Key name</label>
              <input value={this.state.item.name}
                     id="name"
                     onChange={this.onInputChange.bind(this)}></input>
            </div>
            <div className="col-md-4 ml-auto">
              <button onClick={this.handleActionType}>Save</button>
            </div>
          </div>

          <div className="detail">
            <label htmlFor="description">Description</label>
            <textarea rows="3"
                      value={this.state.item.description}
                      id="description"
                      onChange={this.onInputChange.bind(this)}>
            </textarea>
          </div>

          <div className="detail">
            <label htmlFor="type">Type</label>
            <input value={this.state.item.type}
                   id="type"
                   onChange={this.onInputChange.bind(this)}></input>
          </div>

          <div className="detail checkbox">
            <input type="checkbox"
                    checked={this.state.item.sensitivity}
                    id="sensitivity"
                    onClick={this.onInputChange.bind(this)}/>
            <label htmlFor="sensitivity"></label>
            Is this personal data?
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
              {this.state.item.values
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

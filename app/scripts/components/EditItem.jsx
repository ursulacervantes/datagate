import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editItem } from 'actions';
import { STATUS } from 'constants/index';

export class EditItem extends React.Component {

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

  handleActionType = () => {
    const { dispatch } = this.props;
    const newItem = { id: '1',
      name: 'user_id',
      description: 'test',
      type: 'string',
      sensitivity: {
        checked: true,
        description: 'This is personal data, and cannot be distributed in raw form'
      },
      values: [
        {
          key: 'value1',
          value: 'sadf',
          description: 'dsfasdf'
        },
        {
          key: 'value2',
          value: 'ger',
          description: 'hethg'
        }
      ]
    };

    dispatch(editItem(newItem));

    this.props.handleActionType(STATUS.VIEW);
  }

  render() {
    return (
      <div key="EditItem" className="app__view-item app__table">
          <div className="row">
            <div className="col-md-4">
              <label>Key name</label>
              <input value={this.props.item.name} onChange={this.onInputChange}></input>
            </div>
            <div className="col-md-4 ml-auto">
              <button onClick={this.handleActionType}>Save</button>
            </div>
          </div>

          <div className="detail">
            <label>Description</label>
            <textarea rows="3"
                      defaultValue={this.props.item.description}
                      onChange={this.onInputChange}>
            </textarea>
          </div>

          <div className="detail">
            <label>Type</label>
            <input value={this.props.item.type} onChange={this.onInputChange}></input>
          </div>

          <div className="detail checkbox">
            <input type="checkbox"
                    checked={this.props.item.sensitivity.checked}
                    onChange={this.onInputChange}/>
            <label></label>
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

/* istanbul ignore next */
function mapStateToProps(state) {

  return {
    item: state.user.seletectedItem,
  };
}

export default connect(mapStateToProps)(EditItem);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getItem, editItem } from 'actions';
import { STATUS } from 'constants/index';

import ItemList from 'components/ItemList';
import ViewItem from 'components/ViewItem';
import EditItem from 'components/EditItem';

export class Manage extends React.PureComponent {
  static propTypes = {
    selectedItem: PropTypes.object,
  };

  state = {
    action: STATUS.VIEW,
  };

  constructor(props) {
    super(props);
  }

  handleItemSelected = (item) => {
    const { dispatch } = this.props;
    dispatch(getItem(item));
    this.setState({
      action: STATUS.VIEW
    });
  };

  handleActionType = (action) => {
    this.setState({
      action,
    });
  };

  editItem = (item) => {
    const { dispatch } = this.props;
    dispatch(editItem(item));
  };

  render() {
    return (
      <div key="Manage" className="app__manage">
        <div className="app__container">
          <div className="app__private__header">
            <h1>Manage Data</h1>
          </div>

          <div className="row">
            <div className="col-4">
              <ItemList handleItemSelected={this.handleItemSelected}
                        selectedItem = {this.props.selectedItem}
              />
            </div>
            <div className="col-8 padding-30 border">
              {this.state.action === STATUS.VIEW &&
                !!this.props.selectedItem && !!this.props.selectedItem.values &&
                <ViewItem item={this.props.selectedItem} handleActionType={this.handleActionType}/>}
              {this.state.action === STATUS.EDIT &&
                !!this.props.selectedItem && !!this.props.selectedItem.values &&
                <EditItem item={this.props.selectedItem}
                          handleActionType={this.handleActionType}
                          editItem={this.editItem}
                />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    selectedItem: state.items.selectedItem,
  };
}

export default connect(mapStateToProps)(Manage);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getItem } from 'actions';
import { STATUS } from 'constants/index';

import ItemList from 'components/ItemList';
import ViewItem from 'components/ViewItem';
import EditItem from 'components/EditItem';

export class Manage extends React.PureComponent {
  static propTypes = {
    seletectedItem: PropTypes.object,
  };

  state = {
    action: STATUS.VIEW,
  };

  constructor(props) {
    super(props);
  }

  // const [item, setItem] = useState('user_id');
  // const [status, setStatus] = useState(STATUS.VIEW);

  handleItemSelected = (item) => {
    const { dispatch } = this.props;

    dispatch(getItem(item));
  };

  handleActionType = (action) => {
    this.setState({
      action,
    });
  };

  render() {
    return (
      <div key="Manage">
        <div className="app__container">
          <div className="app__private__header">
            <h1>Manage Data</h1>
          </div>
          <ItemList handleItemSelected={this.handleItemSelected} />

          {this.state.action === STATUS.VIEW &&
            !!this.props.seletectedItem &&
            <ViewItem item={this.props.seletectedItem} handleActionType={this.handleActionType}/>}
          {this.state.action === STATUS.EDIT &&
            !!this.props.seletectedItem &&
            <EditItem item={this.props.seletectedItem} handleActionType={this.handleActionType}/>}

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {

  return {
    seletectedItem: state.user.seletectedItem,
  };
}

export default connect(mapStateToProps)(Manage);

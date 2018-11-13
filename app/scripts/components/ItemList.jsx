import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getItemList } from 'actions';

export class ItemList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getItemList());
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleItemSelected(e.target.id);
  };

  render() {
    return (
      <div key="ItemList" className="app__item-list">
          <ul>
            { this.props.items.map(v => (
                <li key={v.id} id={v.id} onClick={this.handleClick}>{v.keyName}</li>
            ))}
          </ul>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  console.log("Itel List redux ",state.user.items );
  return {
    items: state.user.items,
  };
}

export default connect(mapStateToProps)(ItemList);

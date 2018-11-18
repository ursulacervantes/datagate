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
    this.props.handleItemSelected(e.target.parentElement.id);
  };

  render() {
    return (
      <div key="ItemList" className="app__item-list">
          <ul className="nav flex-column nav-pills side-menu">
            { !!this.props.items && this.props.items.map(v => (
                <li key={v.id} id={v.id}
                    className="nav-item"
                    onClick={this.handleClick.bind(this)}>
                  <a className="nav-link">{v.name}</a>
                </li>
            ))}
          </ul>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    items: state.user.items,
  };
}

export default connect(mapStateToProps)(ItemList);

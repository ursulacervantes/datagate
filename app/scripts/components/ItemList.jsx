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
    this.state = {
      active: ''
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getItemList());
    if (!!this.props.items && this.props.items.length > 0) {
      this.setState({ active: this.props.items[0].id });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.selectedItem) {
      this.setState({ active: nextProps.selectedItem.id });
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleItemSelected(e.target.parentElement.id);
    this.setState({ active: e.target.parentElement.id });
  };

  render() {
    return (
      <div key="ItemList" className="app__item-list">
          <ul className="nav flex-column nav-pills side-menu">
            { !!this.props.items && this.props.items.map(v => (
                <li key={v.id} id={v.id} className="nav-item"
                    onClick={this.handleClick.bind(this)}>
                  <a className={this.state.active === v.id ?
                            'nav-link active' : 'nav-link'}>
                    {v.name}
                  </a>
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
    items: state.items.items,
  };
}

export default connect(mapStateToProps)(ItemList);

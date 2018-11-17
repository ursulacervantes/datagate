import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRequestList, filterRequestList } from 'actions';

const filterItems = [
   'ALL',
   'PENDING',
   'APPROVED',
   'DENIED'
];

export class RequestList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: filterItems[0]
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRequestList());
  }

  filterList = (e) => {
    e.preventDefault();
    this.setState({ active: e.target.innerText});
    const { dispatch } = this.props;
    dispatch(filterRequestList(e.target.innerText));
  };

  render() {
    return (
      <div key="RequestList" className="app__table">

          <div className="app__table__filter">
            {filterItems.map(filterItem =>
                <a key={filterItem} 
                  onClick={this.filterList.bind(this)}
                  className={this.state.active === filterItem ? 'active' : ''}>
                  {filterItem}
                </a>
             )}
          </div>

          <table>
            <thead>
              <tr>
                <th className="__primary__title" colSpan="3">Pending Requests</th>
              </tr>
              <tr className="__secondary__title">
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {!!this.props.requests && this.props.requests
              .map(v => (
                <tr key={v.id}>
                  <td>{v.date}</td>
                  <td>{v.reason}</td>
                  <td>
                    <button className={v.status.toLowerCase()}>{v.status}</button>
                  </td>
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
  const { requests=[], filterValue='' } = state.user;
  if(filterValue === 'ALL') {
    return {
      requests
    }
  }

  return {
    requests: requests.filter(d => d.status.toUpperCase() === filterValue.toUpperCase()),
  };
}

export default connect(mapStateToProps)(RequestList);

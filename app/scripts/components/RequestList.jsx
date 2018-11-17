import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRequestList, filterRequestList } from 'actions';

export class RequestList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRequestList());
  }

  filterList = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(filterRequestList(e.target.innerText));
  };

  render() {
    return (
      <div key="RequestList" className="app__table">

          <div className="app__table__filter">
            <a onClick={this.filterList} className="active">ALL</a>
            <a onClick={this.filterList}>PENDING</a>
            <a onClick={this.filterList}>APPROVED</a>
            <a onClick={this.filterList}>DENIED</a>
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

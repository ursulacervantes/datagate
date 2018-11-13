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
      <div key="RequestList" className="app__view-item">

          <div>
            <div onClick={this.filterList}>ALL</div>
            <div onClick={this.filterList}>PENDING</div>
            <div onClick={this.filterList}>APPROVED</div>
            <div onClick={this.filterList}>DENIED</div>
          </div>

          <table>
            <thead>
              <tr><th>Pending Requests</th></tr>
              <tr>
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
                  <td>{v.status}</td>
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

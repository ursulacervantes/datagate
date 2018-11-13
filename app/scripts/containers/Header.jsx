import React from 'react';
import PropTypes from 'prop-types';

import { logOut } from 'actions';

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleClickLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          Data Gate
          <div className="app__header__menu">
            <ul className="list-unstyled">
              <li>
                <a href="#review" className="app__review" onClick={this.handleClickLogout}>
                  <span>Review</span>
                </a>
              </li>
              <li>
                <a href="#request" className="app__request" onClick={this.handleClickLogout}>
                  <span>Request</span>
                </a>
              </li>
              <li>
                <a href="#manage" className="app__manage" onClick={this.handleClickLogout}>
                  <span>Manage</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

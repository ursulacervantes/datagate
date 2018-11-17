import React from 'react';

export default class Header extends React.PureComponent {

  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          <a className="title">Data Gate</a>
          <div className="app__header__menu">
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <span>Review</span>
                </a>
              </li>
              <li>
                <a href="/request" className="active">
                  <span>Request</span>
                </a>
              </li>
              <li>
                <a href="/manage">
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

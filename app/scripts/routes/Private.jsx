import React from 'react';

export default class Private extends React.PureComponent {
  render() {
    return (
      <div key="Private" className="app__private app__route">
        <div className="app__container">
          <div className="app__private__header">
            <h1>Oh hai!</h1>
            <p>You can get this boilerplate{' '}
              <a
                href="https://github.com/gilbarbara/react-redux-saga-boilerplate/"
                target="_blank"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

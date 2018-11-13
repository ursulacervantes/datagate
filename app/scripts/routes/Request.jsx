import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RequestList from 'components/RequestList';

export default class Request extends React.PureComponent {

  render() {
    return (
      <div key="Request">
        <div className="app__container">
          <div className="app__private__header">
            <h1>Requests</h1>
          </div>

          <RequestList />

        </div>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Helmet from 'react-helmet';
import cx from 'classnames';
import treeChanges from 'tree-changes';
import history from 'modules/history';

import config from 'config';

import Home from 'routes/Home';
import Manage from 'routes/Manage';
import NotFound from 'routes/NotFound';
import Private from 'routes/Private';
import Request from 'routes/Request';

import Header from 'containers/Header';

import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);
  }

  render() {
    const { app, dispatch, user } = this.props;

    return (
      <ConnectedRouter history={history}>
        <div
          className={cx('app', {
            'app--private': true,
          })}
        >
          <Helmet
            defer={false}
            htmlAttributes={{ lang: 'pt-br' }}
            encodeSpecialCharacters={true}
            defaultTitle={config.title}
            titleTemplate={`%s | ${config.name}`}
            titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
          />
          <Header dispatch={dispatch} user={user} />
          <main className="app__main">
            <Switch>
              <RoutePrivate isAuthenticated={true} path="/" exact component={Request} />
              <RoutePrivate isAuthenticated={true} path="/private" component={Private} />
              <RoutePrivate isAuthenticated={true} path="/manage" component={Manage} />
              <RoutePrivate isAuthenticated={true} path="/request" component={Request} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </ConnectedRouter>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user,
  };
}

export default connect(mapStateToProps,mapDispatch)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// container
import HomeContainer from './containers/Home';
import BookListContainer from './containers/BookList';
import SearchContainer from './containers/Search';

class AppContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => {
            console.log(`location.pathname: ${location.pathname}`);
            let cls = 'normal';
            if (location.pathname === '/search') {
              cls = 'left';
            } else if (location.pathname.indexOf('bookList') > -1) {
              cls = 'left';
            }
            return (
              <CSSTransitionGroup
                transitionName={cls}
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
              >
                <div key={location.pathname}>
                  <Route
                    location={location}
                    exact
                    path="/"
                    component={HomeContainer}
                  />
                  <Route
                    location={location}
                    path="/search"
                    component={SearchContainer}
                  />
                  <Route
                    location={location}
                    path="/bookList/:bookId"
                    component={BookListContainer}
                  />
                </div>
              </CSSTransitionGroup>
            );
          }}
        />
      </Router>
    );
  }
}

export default AppContainer;

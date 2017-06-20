import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router'
// import { NormalRoutes, AdminRoutes } from './routes'
import { Route, Switch } from 'react-router'

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route path="/" render={() =>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            </div>
          } />
        </Switch>
      </ConnectedRouter>

    );
  }
}

App.propTypes = {
  history: PropTypes.object,
}


export default App;

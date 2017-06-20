import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/counter" component={Counter} />
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
        <Footer />
      </main>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;

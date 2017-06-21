import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './containers/Counter';
import ProductList from './containers/ProductList';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <main className="container">
          <ConnectedRouter history={this.props.history}>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/counter" component={Counter} />
              <Route component={NotFound} />
            </Switch>
          </ConnectedRouter>
        </main>
        <Footer />
      </main>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;

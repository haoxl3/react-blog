import React, { Component } from 'react';
import {GlobalStyle} from './style'
import store from './store';
import {Provider} from 'react-redux';
import {Iconfont} from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <GlobalStyle/>
          <Iconfont/>
          <Provider store={store}>
            <Header/>
          </Provider>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {GlobalStyle} from './style'
import {Iconfont} from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <GlobalStyle/>
          <Iconfont/>
          <Header/>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {GlobalStyle} from './style'
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {Iconfont} from './statics/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <GlobalStyle/>
          <Iconfont/>
          <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header/>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </Provider>
      </React.Fragment>
    );
  }
}

export default App;

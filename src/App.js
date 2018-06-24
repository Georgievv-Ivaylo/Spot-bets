import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/navigations/Header';
import Logo from './components/top/Logo';
import Home from './components/home/View';
import Administration from './components/administration/View';
import XML from './components/xml/View';
import Bets from './components/bets/View';
import './styles/styles.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      header: []
    };
  }

  render() {
    
    return (
      <div className='App'>
        <Header {...this.props}/>
        <Logo/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/administration' component={Administration}/>
        <Route exact path='/administration/upload-xml' component={XML}/>
        <Route exact path='/bets' component={Bets}/>
      </div>
    );
  }
}

export default App;

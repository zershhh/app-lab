import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Components/Customers'
import Drinks from './Components/Drinks'
import Voucher from './Components/Voucher'
import Add from './Components/Add'
import Calculate from './Components/Calculate'


class App extends Component {
   unfinished() {
    alert("Web Page Under Construction!");
}

  render() {
    return (
      <div className="App">
        <Customers />
        <Drinks />
        <Voucher />
        <Add handleClicked={this.unfinished}/>
        <Calculate />
      </div>
    );
  }
}

export default App;
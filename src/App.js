import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import './App.css';
// import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Resturant fusion</NavbarBrand> 
        </div>
      </Navbar>
      <Menu />
    </div>
   );
 }
}
export default App;

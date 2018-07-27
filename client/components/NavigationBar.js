import React, { Component } from 'react'
import { Link } from 'react-router';

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">Xebia</a>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
      </nav>  
    );
  }
}

export default NavigationBar;
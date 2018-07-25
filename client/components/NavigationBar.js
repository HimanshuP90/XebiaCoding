import React, { Component } from 'react'

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Xebia</a>
            </div>

            <div className="navbar navbar-default">
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="navbar-brand" href="#">Login</a></li>
                </ul>
            </div>
        </div>
      </nav>  
    );
  }
}

export default NavigationBar;
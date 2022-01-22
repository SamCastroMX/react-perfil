import React from 'react';

import logo from "../assets/img/logo.png";
import logoRedondo from "../assets/img/logo-redondo.png";

export const Nav = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={logoRedondo} height={25}/></a>                
            <div className="d-flex">
                <img src={logo} height={25}/>
            </div>
        </div>
    </nav>
  </>
  )
};

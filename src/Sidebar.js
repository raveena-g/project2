import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
export default props => {
  const location = useLocation();
  return (
    <nav className='sidebar'>
      <h1><a href="/">Allspice</a></h1>
      <div className='frenchButtonHome'>
                <a className="frenchHome" href={window.location.href.concat("_fr")}><Button> <h2>FR</h2> </Button></a></div>
    <Menu>
      <a className="menu-item" href="/">
      <h3>Home</h3>
      </a>

      <a className="menu-item" href="/Recipes">
        <h3>Find a Recipe</h3>
      </a>

      <a className="menu-item" href="/About">
      <h3>About Us</h3>
      </a>
    </Menu>

    </nav>
  );
};
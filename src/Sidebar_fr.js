import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
export default props => {
  const location = useLocation();
  return (
    <nav className='sidebar'>
      <h1><a href="/_fr">Allspice</a></h1>
      <div className='frenchButtonHome'>
                <a className="frenchHome" href={window.location.href.slice(0, -3)}><Button> <h2>EN</h2> </Button></a></div>
    <Menu>
      <a className="menu-item" href="/_fr">
      <h3>Page d'accueil</h3>
      </a>

      <a className="menu-item" href="/Recipes_fr">
        <h3>Trouver une recette</h3>
      </a>

      <a className="menu-item" href="/About_fr">
      <h3>À propos de nous</h3>
      </a>
    </Menu>

    </nav>
  );
};
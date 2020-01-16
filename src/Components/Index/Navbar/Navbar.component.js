import React from 'react';
import { Link } from 'react-router-dom';
import FondoHeader from '../../../Img/logoHeader.jpeg';

function Navbar(){
  return(
    <div className="container-navbar">
      <div>
        <img className="logo-navbar" src={FondoHeader}></img>
      </div>
      <ul className="container-list">
        <li>
          <Link style={{ textDecoration: 'none', color:'white' }} >Inicio</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color:'white'  }}>Eventos</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color:'white'  }}>Galeria</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color:'white'  }}>Ubicacion</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color:'white'  }}>Contacto</Link>
        </li>
      </ul>
      <div className="container-hambur">
        <ul className="list-hambur">
          <li>___</li>
          <li>__</li>
          <li>_</li>
        </ul>
      </div>
    </div> 
  )
}

export default Navbar;
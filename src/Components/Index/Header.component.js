import React from 'react'
import FondoHeader from '../../Img/fondoPosible1.jpg';

function Header(){
  return(
    <div className="container-header">
      <div className="container-img">
        <img src={FondoHeader}></img>
      <div className="container-title-header">
        <div className="container-date-title-header">
          <h2>Fiesta Provincial del Trigo</h2>
          <h3>Villa Huidobro 2020</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;
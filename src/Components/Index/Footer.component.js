import React from 'react'

function Footer(){
  return(
    <div className="container-footer">
      <div className="container-redes-sociales-footer">
        <div className="container-icon">
            <h3 className="fab fa-instagram fa-3x"></h3>
            <h3 className="fab fa-facebook fa-3x"></h3>
            <h3 className="fab fa-twitter-square fa-3x"></h3>
            <h3 className="fab fa-whatsapp fa-3x"></h3>
        </div>
        <div className="container-derechos-reservados-footer">
          <p className="derechos-reservados-footer">
            Fiesta Provincial del Trigo 2020</p>
          <p className="derechos-reservados-footer">
            Derechos reservados Fiesta Provincial 
            del Trigo 2020 Copyright ©</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
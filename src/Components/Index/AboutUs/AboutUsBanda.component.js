import React from 'react';

function AboutUs(){
  return(
    <div className="container-about-us-banda">
      <div className="about-us-banda"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="250"
      >
        <div className="container-banda-left">
          <h4>Sabado 11/01/2020</h4>
            <ul>
              <li>-Evento Finalizado</li>
            </ul>
          </div>
          <hr></hr>
          <div className="container-banda-right">
          <h4>Sabado 18/01/2020</h4>
            <ul>
              <li>-Desfile de carrozas</li>
              <li>-Eleccion de la Reina</li>
              <li>-Banda invitada: La monada</li>
              <li>-Banda invitada: La Banda de Carlitos</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default AboutUs;
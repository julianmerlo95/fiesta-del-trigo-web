import React from 'react';
import FondoHeader from '../../Img/fondoHeader2.jpg';

function AboutUs(){
  return(
    <div className="container-abouts-us">
      <div className="container-img-about">
        <img src={FondoHeader}></img>
      </div>
      <div className="container-text-about">
        <h3>Sobre Nuestra Fiesta</h3>
        <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum </p>
      </div>
    </div>
  )
}

export default AboutUs;